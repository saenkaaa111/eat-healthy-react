import React from "react";
import './AboutUsSection.scss';
import abUs1 from './photo/ab-us1.png';
import abUs2 from './photo/ab-us2.png';
import abUs3 from './photo/ab-us3.png';

export const AboutUsSection = () => {
  return (
    <section id="about-us" className="container">
        <div className="about-us-content">
            <h2>About US</h2>
            <p>Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs). Organic foods include fresh produce, meats, and dairy products as well as processed foods such as crackers, drinks, and frozen meals.</p>            
            <a href="#" className="btn fill">Learn More</a>
        </div>
        <div className="about-us-cards">
            <div className="left">
                <img src={abUs1} alt="header-Image"/>
                <img src={abUs2} alt="header-Image"/>
            </div> 
            <div className="right">
                <img src={abUs3} alt="header-Image" className="right-img"/>
            </div> 
        </div>        
     </section>
  );
};