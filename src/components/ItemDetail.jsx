import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import './styles/item-detail.css'
import { IoIosArrowRoundBack } from "react-icons/io";

const ItemDetail = ({storeItems, cart, setCart,}) => {
  let navigate = useNavigate()
  const params = useParams()  
  let foundItem = storeItems.find((item)=> item.id== params.productId)
  
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

  const addToCart = () =>{
    if (cart.some(item => item.id === foundItem.id)){

      const newCart =cart.map(cartItem =>{
        if(cartItem.id === foundItem.id){
          return {...cartItem, quantity: cartItem.quantity += quantity}
        }
      return cartItem
      })
      setCart(newCart)
        setQuantity(1)
        return
    }    
    setCart([...cart, {id:foundItem.id, quantity: quantity}])
    setQuantity(1)
    } 

    

  return (
    
    <div className='item-detail'>
      <Link to={`/shop`}><IoIosArrowRoundBack/>Back to Shop</Link>
    {/* <button onClick={()=>navigate('/shop')}>Back to shop</button> */}

    <h2>{foundItem.name}</h2>
    <div>{foundItem.description}</div>
    <img src={foundItem.image} alt="" />
    <div>{formatPrice(foundItem.price)}</div>
    <div className="quantity-container">
      <button onClick={decreaseQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </div>
    <button onClick={addToCart} >Add to cart</button>
    </div>
    
  )
}

export default ItemDetail