import ProductList from '@/components/ProductsList';
import { productsToPreLoad } from '../../../public/data';

function Home() {
  return (
    <div>
      <ProductList products={productsToPreLoad} />
    </div>
  );
}
export default Home;
