import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Item from './Item'
import "./styles/shop.css"

const Shop =({storeItems}) => {
    return(  
  <main>
    {storeItems.map((item) =>(
        <Link key={item.id}to={`/shop/${item.name}`}>
          <Item key={item.id} item={item}/>
        </Link>
        
    ))}
    
    </main>
    // <Outlet/>
  )}

export default Shop