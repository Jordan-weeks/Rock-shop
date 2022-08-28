import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = ({cartId, storeItems, cartQuantity, cart, setCart}) => {
  const foundItem = storeItems.find(item=>item.id===cartId)
  
  
    return (
    <>
    
    <div>{foundItem.name} </div>
    <Link to={`/shop/${foundItem.id}`}>
    <img src={foundItem.image} alt="" />
    </Link>    
    <div>Quantity: {cartQuantity}</div>
    <div>Total: ${(foundItem.price*cartQuantity)/100}</div>
    <button>Remove from cart</button>
    </>
  )
}

export default CartItem