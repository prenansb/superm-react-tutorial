import Button from "./Button";

export default function ProductDetailInfo({ product, onProductAdd }) {
  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd(product)}>${product.price}</Button>
    </>
  );
}
