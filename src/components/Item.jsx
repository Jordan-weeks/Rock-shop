import React from 'react'
import "./styles/item.css"
import "./styles/header.css"

const Item = ({item}) => {
  const formatPrice = (cents) =>{
    let price = cents/=100
    return "$"+price
  }
  return (
    <div className='store-card'>
    <h2>{item.name}</h2>
    <p>{formatPrice(item.price)}</p>
    <img src={item.image} alt={item.name+ " picture"} />
    </div>
    
  )
}

export default Item