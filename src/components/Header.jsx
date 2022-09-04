import React, { useState, useEffect} from 'react'
import ProfilePic from '../assets/profile-pic.png'
import "./styles/header.css"
import {FiInstagram, FiMenu} from "react-icons/fi"
import {FaTiktok} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'


const Header = ({navOpen, setNavOpen, cart, itemsInCart, setItemsInCart}) => {

  let navigate = useNavigate()
  
  useEffect(() => { 
    const totalItems= cart.reduce((accumulator, object) => {
      return accumulator + object.quantity;
    }, 0);
    setItemsInCart(totalItems)
  }, [cart])


  return (
    <header className='header'>
      <FiMenu className='icon' onClick={() => setNavOpen(!navOpen)}/>
      <h1>Rocks 4 sale!</h1>
      <div>
      {/* <div className='social-container'>
        <a href='https://www.instagram.com/erik_takes_a_hike/' target="_blank" rel="noopener noreferrer">
          <FiInstagram className='icon'/>
        </a>
      
      <FaTiktok className='icon'/>
      </div> */}
      <div onClick={()=>navigate('/cart')}> Cart({itemsInCart})</div>
      </div>
      
    </header>
     
  )
}

export default Header