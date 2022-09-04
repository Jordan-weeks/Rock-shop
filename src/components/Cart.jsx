import React, { useState } from 'react'
import CartItem from './CartItem'
import './styles/cart.css'
import { useEffect } from 'react'

const Cart = ({cart, storeItems, setCart}) => {
  const [cartTotal, setCartTotal] = useState(0) 
  
  useEffect(() => {
    let cartArray = []
    cart.forEach(cartItem => {
      let foundItem= storeItems.find(storeItem=>storeItem.id===cartItem.id)
      cartArray.push(cartItem.quantity* foundItem.price)    
    });
     let total = cartArray.reduce(
      (previousValue, currentValue) => 
        previousValue + currentValue,0
      )
      total= total/100
      setCartTotal(total)
      // return total
  }, [cart])

  return (
    <main>
    {cart.map((item) =>(
        <CartItem key={item.id}cartId={item.id} cartQuantity={item.quantity} storeItems={storeItems} cart = {cart} setCart={setCart}/>       
    ))}

    <div>Total: ${cartTotal}  </div>
    <button>Proceed to Checkout</button>
    </main>
  )
}

export default Cart