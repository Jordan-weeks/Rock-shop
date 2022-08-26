import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ItemDetail = ({storeItems, cart, setCart}) => {
  let navigate = useNavigate()
  let {productName} = useParams()  
  let foundItem = storeItems.find((item)=> item.name=== productName)
  
  const [quantity, setQuantity] = useState(1)

  const formatPrice = (cents) =>{
    let price = cents/=100
    return "$"+price
  }
  const increaseQuantity = () =>{
    setQuantity(quantity +1)
  }
  const decreaseQuantity = () =>{
    if (quantity===1) return
    setQuantity(quantity-1)
  }
  const addSingleItemToCart = () =>{
    setCart([...cart, foundItem.name])
  }

  const addToCart = () =>{
    for (let i = 1; i<=quantity; i++){
      console.log(quantity)
      addSingleItemToCart()
    }    
    setQuantity(1)
  }
  return (
    <>
    <button onClick={()=>navigate('/shop')}>Back to shop</button>
    <div>ItemDetail for {foundItem.name}</div>
    <div>{foundItem.description}</div>
    <img src={foundItem.image} alt="" />
    <div>{formatPrice(foundItem.price)}</div>
    <div className="quantity-container">
      <button onClick={increaseQuantity}>+</button>
      <span>{quantity}</span>
      <button onClick={decreaseQuantity}>-</button>
    </div>
    <button onClick={addToCart} >Add to cart</button>
    </>
    
  )
}

export default ItemDetail