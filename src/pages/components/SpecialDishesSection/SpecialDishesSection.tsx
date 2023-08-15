import React from "react";
import './SpecialDishesSection.scss';
import dishes1 from './photo/dishes1.png';
import dishes2 from './photo/dishes2.png';
import dishes3 from './photo/dishes3.png';

export const SpecialDishesSection = () => {
  return (
    <section id="special-dishes">
        <h2>Special Dishes for you</h2>
        <p>Made with premium & 100% Organic ingredients</p>
        <div className="flex-dishes">
            <div className="info">
                <img className="img-top" src={dishes1} alt="dishes-Image" />
                <h3>Green Salad</h3>
                <p className="mini">A salad combined witha delicious cut of bacon and mixed with tasty and fresh sesome oil.</p>
            </div>
            <div className="info center">
                <img className="img-top" src={dishes2} alt="dishes-Image" />
                <h3>Beef Salad</h3>
                <p className="mini">A salad combined witha delicious cut of bacon and mixed with tasty and fresh sesome oil.</p>
            </div>
            <div className="info desktop-only">
                <img className="img-top" src={dishes3} alt="dishes-Image"/>
                <h3>Nut Salad</h3>
                <p className="mini">A salad combined witha delicious cut of bacon and mixed with tasty and fresh sesome oil.</p>
            </div>
        </div>
        <a href="#" className="btn fill btnn">View All</a>
     </section>
  );
};