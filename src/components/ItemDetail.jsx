import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'

const ItemDetail = ({storeItems, cart, setCart, setItemsInCart}) => {
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
    setCart([...cart, {id:foundItem.id, quantity: quantity}])
    setQuantity(1)
    } 

    useEffect(() => {
      const totalItems= cart.reduce((accumulator, object) => {
        return accumulator + object.quantity;
      }, 0);
      setItemsInCart(totalItems)
    }, [cart])

  return (
    <>
    <button onClick={()=>console.log(params)}>log</button>
    <button onClick={()=>console.log(foundItem)}>foundItem</button>
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