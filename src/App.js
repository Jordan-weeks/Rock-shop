import About from "./components/About.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop"
import Nav from "./components/Nav";
import ItemDetail from "./components/ItemDetail"
import {useState, useEffect} from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Cart from "./components/Cart.jsx";
import './app.css'

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [storeItems, setStoreItems] = useState([])
  const [cart, setCart] = useState([])
  const [itemsInCart, setItemsInCart] = useState(0)

  const fetchStoreItems = async() =>{
      const response = await fetch('http://localhost:5000/items')
      const data = await response.json()
      setStoreItems(data)
  }  
  useEffect(() =>{
    fetchStoreItems()
  },[])
  return (
    <div className="app">
    <BrowserRouter>
    <Header setNavOpen={setNavOpen} navOpen={navOpen} cart ={cart} setCart={setCart} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} >
    
    </Header>
    <Nav navOpen={navOpen} setNavOpen={setNavOpen}/>
    <Routes>
      <Route path="/" element={ <Home /> }/>      
      <Route path="/about" element= {<About/>}/>
      <Route path="/shop" element = {<Shop storeItems={storeItems}/>}/>
      <Route path="/shop/:productId" element={<ItemDetail storeItems={storeItems} cart={cart} setCart={setCart} setItemsInCart={setItemsInCart}/>}/>
      <Route path="/cart" element={<Cart cart ={cart} setCart={setCart} storeItems={storeItems}/>}/>
    </Routes>           
      
      
        
      

      
      
    
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
