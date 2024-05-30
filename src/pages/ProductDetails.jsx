import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { productId } = useParams();
  return (
    <section>
      <h1>ProductDetails Page</h1>
      <div>Now showing product with id - {productId}</div>
    </section>
  );
}
