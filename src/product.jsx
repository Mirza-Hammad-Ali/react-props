
function Product({ name, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  )
}

export default Product