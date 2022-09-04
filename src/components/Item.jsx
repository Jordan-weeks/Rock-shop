import React from 'react'
import "./styles/item.css"
import "./styles/header.css"
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  const formatPrice = (cents) =>{
    let price = cents/=100
    return "$"+price
  }
  return (
    <div className='store-card'>
    <img src={item.image} alt={item.name+ " picture"} />
    <div>{item.name}</div>
    <div>{formatPrice(item.price)}</div>
    
    {/* <Link to={`/shop/${item.id}`}>
      More details
    </Link> */}
    </div>
    
  )
}

export default Item