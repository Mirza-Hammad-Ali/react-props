import Product from './product'

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Product name="Laptop" price={$999} />
      <Product name="Phone" price={$599} />
    </div>
  )
}

export default App