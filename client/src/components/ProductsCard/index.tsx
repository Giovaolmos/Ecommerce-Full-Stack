/* eslint-disable @next/next/no-img-element */
import { IProductsProps } from '@/interfaces/products/IProductsProps';

function ProductCard({ product }: IProductsProps) {
  return (
    <div>
      <img src={product.image} alt={product.name} width={150} height={150} />
      <h2>{product.name}</h2>
      <p>$ {product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
export default ProductCard;
