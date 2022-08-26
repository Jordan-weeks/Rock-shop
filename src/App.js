import About from "./components/About.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop"
import Nav from "./components/Nav";
import ItemDetail from "./components/ItemDetail"
import {useState, useEffect} from 'react'
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home.js";

function App() {
  const [navOpen, setNavOpen] = useState(true)
  const [storeItems, setStoreItems] = useState([])
  const [cart, setCart] = useState([])

  const fetchStoreItems = async() =>{
      const response = await fetch('http://localhost:5000/items')
      const data = await response.json()
      setStoreItems(data)
  }  
  useEffect(() =>{
    fetchStoreItems()
  },[])
  // fetchStoreItems()
  return (
    <div className="app">
    <BrowserRouter>
    <Header setNavOpen={setNavOpen} navOpen={navOpen} cart ={cart} setCart={setCart}>
    
    </Header>
    {navOpen?<Nav navOpen={navOpen} setNavOpen={setNavOpen}/> : null }
    <Routes>
      <Route path="/" element={ <Home /> }/>      
      <Route path="/about" element= {<About/>}/>
      <Route path="/shop" element = {<Shop storeItems={storeItems}/>}/>
      <Route path="/shop/:productName" element={<ItemDetail storeItems={storeItems} cart={cart} setCart={setCart}/>}/>
    </Routes>           
      
      
        
      

      
      
    
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
