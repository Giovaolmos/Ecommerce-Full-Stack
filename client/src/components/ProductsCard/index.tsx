/* eslint-disable @next/next/no-img-element */
import { IProductsProps } from '@/interfaces/products/IProductsProps';
import Link from 'next/link';

function ProductCard({ product }: IProductsProps) {
  return (
    <div>
      <img src={product.image} alt={product.name} width={150} height={150} />
      <h2>{product.name}</h2>
      <p>$ {product.price}</p>
      <Link href={`/detail-product/${product.id}`}>
        <button>DETAIL {'>'}</button>
      </Link>
      <button>Add to Cart</button>
    </div>
  );
}
export default ProductCard;
