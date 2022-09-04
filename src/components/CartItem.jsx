import React from 'react'
import { Link } from 'react-router-dom'
import './styles/cartItem.css'

const CartItem = ({cartId, storeItems, cart, setCart}) => {
  const foundStoreItem = storeItems.find(item=>item.id===cartId)
  const foundCartItem = cart.find(item=> item.id===cartId)
  
  const increaseCartQuantity = () =>{
    const newCart = cart.map(cartItem =>{
      if(cartId === cartItem.id){
        return {...cartItem, quantity: cartItem.quantity +=1}
      }
      return cartItem
    })
    setCart(newCart)
  }

  const decreaseCartQuantity = () =>{
    if (foundCartItem.quantity <= 0 ) return 
    const newCart = cart.map(cartItem =>{
      if(cartId === cartItem.id){
        return {...cartItem, quantity: cartItem.quantity -=1}
      }
      return cartItem
    })
    setCart(newCart)
  }

  const changeCartQuantity = (e) =>{
    // if (e <= 0) return 1
    console.log(e)
    const newCart = cart.map(cartItem =>{
      if(cartId === cartItem.id){
        return {...cartItem, quantity: Number(e)}
      }
      return cartItem
    })
    setCart(newCart)
  }

  const removeFromCart = () =>{
    const newCart = cart.filter(item => item.id !== foundCartItem.id)
    setCart(newCart)
    console.log("removed")

  }
  return(
    <div className='cart-item'>
      <Link  to={`/shop/${foundStoreItem.id}`}>
        <img className='product-image' src={foundStoreItem.image} alt="" />
      </Link>
      <div className="details"> 
        <div className='details-container'>   
          <div>{foundStoreItem.name} </div>
          <div>Item Total: ${(foundStoreItem.price*foundCartItem.quantity)/100}</div>
          <button className='remove' onClick={removeFromCart}>Remove from cart</button>
        </div>
        <div className="cart-quantity">
          <button onClick={increaseCartQuantity}>+</button>
          <input type="number" value ={foundCartItem.quantity || ''}onChange={(e) => changeCartQuantity(e.target.value)} />
          <button onClick={decreaseCartQuantity}>-</button>
        </div> 
      </div>
    </div>
  )
}

export default CartItem