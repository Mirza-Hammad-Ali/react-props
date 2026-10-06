import Product from './product'

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Product name="Laptop" price={90000} />
      <Product name="Phone" price={15999} />
    </div>
  )
}

export default App