import React from 'react'

const CartItem = ({cartId, storeItems, cartQuantity}) => {
  const foundItem = storeItems.find(item=>item.id===cartId)
  
  
    return (
    <>
    <button onClick={()=> console.log(foundItem)}>log cart item</button>\
    <div>{foundItem.name} {cartQuantity}</div>
    </>
  )
}

export default CartItem