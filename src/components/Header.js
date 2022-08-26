import React from 'react'
import ProfilePic from '../assets/profile-pic.png'
import "./styles/header.css"
import {FiInstagram, FiMenu} from "react-icons/fi"
import {FaTiktok} from "react-icons/fa"


const Header = ({navOpen, setNavOpen, cart, setCart}) => {

  const renderCart = () =>{

  }
  const logCart = () =>{
    console.log(cart)
  }


  return (
    <header className='header'>
      <FiMenu className='icon' onClick={() => setNavOpen(!navOpen)}/>
      <h1>Rocks 4 sale!</h1>
      <div>
      <FiInstagram className='icon'/>
      <FaTiktok className='icon'/>
      <div onClick={logCart}> Cart({cart.length})</div>
      </div>
    </header>
     
  )
}

export default Header