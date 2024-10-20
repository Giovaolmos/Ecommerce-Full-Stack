function detailProduct({ params }: { params: { id: string } }) {
  const productId: string = params.id;

  return (
    <div>
      <h1>{productId}</h1>
      <h1>name</h1>
      <h1>imagen</h1>
      <p>description</p>
      <p>$PRICE</p>
      <button>ADD TO CART</button>
    </div>
  );
}
export default detailProduct;
