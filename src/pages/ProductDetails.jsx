import { useParams } from 'react-router-dom';
import { data } from '../data';
export default function ProductDetails() {
  const params = useParams();
  const productId = params.productId;

  let product = data.findIndex((el) => {
    return el.id == productId;
  });

  if (product == -1) {
    alert('Product Id is Wrong');
  }

  return (
    <div>
      <h1>Product Details Of : {productId}</h1>
    </div>
  );
}
