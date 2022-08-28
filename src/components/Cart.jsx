import React from 'react'
import CartItem from './CartItem'

const Cart = ({cart, storeItems, setCart}) => {
  return (
    <>
    <button onClick={()=>console.log(cart)}>log cart</button>
    {cart.map((item) =>(
        <CartItem key={item.id}cartId={item.id} cartQuantity={item.quantity} storeItems={storeItems} cart = {cart} setCart={setCart}/>       
    ))}


    </>
  )
}

export default Cart