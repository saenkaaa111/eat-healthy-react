import React from 'react'
import logo from './photo/logo.png';
import Icons from './photo/Icons.png';
import BurgerMenu from './photo/BurgerMenu.png';
import './Header.scss';
import { NavigationLink } from '../NavigationLink/NavigationLink';

export const Header = () => {
  const toggleNavVisibility = () => {};

  return (
    <header>
      <div className="navi">
            <img src={logo} alt="Logo" className="logo"/>
            <nav className="mobile-nav">
                <a href="index.html" className="nav-link green">Home</a>
                <a href="#" className="nav-link">About</a>
                <a href="#" className="nav-link">Contact</a>
                <a href="#" className="nav-link last">Testimonials</a>            
            </nav>
        </div>
        <div className="navi right">
            <img src={Icons} alt="Корзина" margin-right="30px" width="auto" height ="auto"/>
            <a href="#" className="btn convert desktop-only">Order Now</a> 
        </div>
        <button className="icon-btn des-only" onClick={toggleNavVisibility}>
            <img src={BurgerMenu} width="30" height="30"/></button>
    
          
      
    </header>
  )
}
