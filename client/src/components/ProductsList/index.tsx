import { IProductsListProps } from '@/interfaces/products/IProductsListProps';
import ProductCard from '../ProductsCard';
import { IProducts } from '@/interfaces/products/IProducts';

function ProductList({ products }: IProductsListProps) {
  return (
    <div>
      {products.map((product: IProducts) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
export default ProductList;
