import React from "react";
import './HeroSection.scss';
import headerImage from './photo/header-Image.png';

export const HeroSection = () => {
  return (
    <section id="hero" className="container">
        <div className="grid-block">
            <div>
                <h1>
                    Just <span className="green-color">Eat healthy</span> <br/> food  to live a <br/> healthier life
                </h1>
                <p>Enjoy a healthy life by eating healthy foods <br/> that have extraordinary flavors that make <br/> your life healthier for today and in the future</p>            
                <a href="index.html" className="btn fill">Order Now</a>
            </div>
            <div className="hero-card">
                <img src={headerImage} alt="header-Image" />
                </div>        
        </div>
        
        
     </section>   
   
  );
};
