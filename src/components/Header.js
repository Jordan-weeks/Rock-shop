import React, { useState } from 'react'
import ProfilePic from '../assets/profile-pic.png'
import "./styles/header.css"
import {FiInstagram, FiMenu} from "react-icons/fi"
import {FaTiktok} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'


const Header = ({navOpen, setNavOpen, cart, setCart,itemsInCart}) => {

  let navigate = useNavigate()


  return (
    <header className='header'>
      <FiMenu className='icon' onClick={() => setNavOpen(!navOpen)}/>
      <h1>Rocks 4 sale!</h1>
      <div>
      <FiInstagram className='icon'/>
      <FaTiktok className='icon'/>
      <div onClick={()=>navigate('/cart')}> Cart({itemsInCart})</div>
      
      </div>
    </header>
     
  )
}

export default Header