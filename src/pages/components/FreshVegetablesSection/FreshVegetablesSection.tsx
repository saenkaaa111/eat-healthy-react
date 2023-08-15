import React from "react";
import './FreshVegetablesSection.scss';
import food from './photo/food.png';

export const FreshVegetablesSection = () => {
  return (
    <section id="fresh-vegetables" className="container">        
        <div className="fresh-vegetables-cards">            
            <img src={food} alt="header-Image"/> 
        </div>    
        <div className="fresh-vegetables-content">
            <h2>Fresh Vegetables Every Day</h2>
            <p>Healthy life as informed declared we enjoy the margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe.</p>            
            <a href="#" className="btn fill">Learn More</a>
        </div>    
     </section>
  );
};