import { data } from '../data';

export default function HomePage() {
  return (
    <div className="w-full h-dvh flex justify-center py-4">
      <div className="contianer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {data.map((el) => {
          return (
            <div key={el.id} className="card bg-base-300 p-3 shadow-sm">
              <figure>
                <img src={el.image} alt="Shoes" className="w-full object-contain h-[200px]" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{el.category}</h2>
                <p>Price : {el.price} $</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// map & key
// useRef
// modals (propagation)
