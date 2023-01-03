import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    const getProducts = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/restaurants/${id}/`
      )
    setProducts(response.data)
    console.log(response.data)
  }
  getProducts()
}, [])
  const onAdd = (product) => {
    const exist = cartItems.find((x)=> x.id === product.id)
    if(exist) {
      const newCartItems = cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x)
      setCartItems(newCartItems)
      console.log(newCartItems)
  }
}
  const onRemove = (product) => {}
  return (
    <div className="App">
      <Header />
      <Main onAdd={onAdd} onRemove={onRemove} />
      <Footer />
    </div>
  )
}

export default App;
