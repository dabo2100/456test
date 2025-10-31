import { useRef, useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';

export default function App() {
  const nameInput = useRef();
  const priceInput = useRef();
  const qtyInput = useRef();

  const [newPhoneModal, setNewPhoneModal] = useState(false); //boolean
  const [indexToEdit, setIndexToEdit] = useState(null);

  const [phones, setPhones] = useState([
    { name: 'iPhone x', price: 400, qty: 3 },
    { name: 'iPhone 11', price: 500, qty: 4 },
    { name: 'iPhone 12', price: 600, qty: 5 },
    { name: 'iPhone 13', price: 700, qty: 7 },
    { name: 'iPhone 14', price: 800, qty: 7 },
  ]);

  const removePhone = (index) => {
    let confirmRemove = confirm('Are you sure ?');
    if (confirmRemove) {
      let copy = [...phones];
      copy.splice(index, 1);
      setPhones(copy);
    }
  };

  const addNewPhone = () => {
    let newObj = {
      name: nameInput.current.value,
      price: +priceInput.current.value,
      qty: +qtyInput.current.value,
    };
    let copy = [...phones];
    copy.push(newObj);
    alert('Phone Addedd Successfuly');
    setPhones(copy);
    setNewPhoneModal(false);
  };

  const saveNewData = () => {
    let newObj = {
      name: nameInput.current.value,
      price: +priceInput.current.value,
      qty: +qtyInput.current.value,
    };
    let copy = [...phones];
    copy[indexToEdit] = newObj;
    setPhones(copy);
    document.getElementById('my_modal_1').close();
  };

  return (
    <div className="w-full h-dvh flex justify-center">
      <div className="container py-4">
        <div className="w-full flex gap-3">
          <button className="btn btn-primary" onClick={() => setNewPhoneModal(true)}>
            Add New Phone
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Item Qty</th>
              <th>Item Total</th>
            </tr>
          </thead>
          <tbody>
            {phones.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <td>{el.qty}</td>
                  <td>{el.qty * el.price}</td>
                  <td>
                    <div className="flex items-center justify-center w-full gap-3">
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          nameInput.current.value = phones[index].name;
                          priceInput.current.value = phones[index].price;
                          qtyInput.current.value = phones[index].qty;
                          setIndexToEdit(index);
                          document.getElementById('my_modal_1').showModal();
                        }}
                      >
                        Edit
                      </button>
                      <button className="btn btn-error" onClick={() => removePhone(index)}>
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {newPhoneModal && (
        <div onClick={() => setNewPhoneModal(false)} className="w-full h-dvh bg-black/80 fixed top-0 left-0 flex justify-center items-center">
          <div onClick={(event) => event.stopPropagation()} className="w-[400px] p-4 border rounded bg-gray-900 gap-4 shadow flex flex-col">
            <div className="w-full flex items-center justify-between">
              <h1>Add New Phone</h1>
              <IoCloseCircle onClick={() => setNewPhoneModal(false)} />
            </div>
            <input ref={nameInput} className="input w-full" placeholder="Enter new phone Name" />
            <input ref={priceInput} className="input w-full" placeholder="Enter new phone Price" />
            <input ref={qtyInput} className="input w-full" placeholder="Enter new phone Qty" />
            <button className="btn btn-primary w-full" onClick={addNewPhone}>
              Save Phone
            </button>
          </div>
        </div>
      )}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col gap-3">
          <h3 className="font-bold text-lg">Edit Phone Info</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <input ref={nameInput} className="input w-full" placeholder="Enter new phone Name" />
          <input ref={priceInput} className="input w-full" placeholder="Enter new phone Price" />
          <input ref={qtyInput} className="input w-full" placeholder="Enter new phone Qty" />
          <button className="btn btn-success w-full" onClick={saveNewData}>
            Save Data
          </button>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
