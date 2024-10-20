import { IProducts } from '@/interfaces/products/IProducts';

function Cart() {
  const products: IProducts[] = [];
  return (
    <div>
      <div>
        <span>PRODUCT</span>
      </div>
      <div>
        <span>PRICE</span>
      </div>
      <div>
        <span>REMOVE</span>
      </div>
      {products.length === 0 ? <h1>EMPTY CART</h1> : <h1>PRODUCTS LIST</h1>}
    </div>
  );
}
export default Cart;
