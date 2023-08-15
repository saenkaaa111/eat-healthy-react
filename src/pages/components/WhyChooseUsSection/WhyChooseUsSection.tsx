import React from "react";
import './WhyChooseUsSection.scss';
import order from './photo/order.png';
import map from './photo/map.png';
import organic from './photo/organic.png';



export const WhyChooseUsSection = () => {
    return (
        <section id="why-choose-us" className="container">  
                <h2>Why Choose US?</h2>
                <p>Organic food is grown without the use of synthetic chemicals</p>
                <div className="content">
                    <div>
                        <img className="img-bottom" src={order} alt="Order" />        
                        <h3>Easy to order</h3> 
                        <p className="content">Foods include fresh produce, meats as well as processed</p> 
                    </div>
                    <div>
                        <img className="img-bottom" src={map} alt="Map" />        
                        <h3 className="new-line" >Live Order <span/> </h3> 
                        <p className="content">Place your online Order easily and get the food instantly</p> 
                    </div>
                    <div>
                        <img className="img-bottom" src={organic} alt="Organic" />        
                        <h3 >100% Organic</h3> 
                        <p className="content">Organic food is grown without the use of synthetic chemicals</p> 
                    </div>
                </div>
                <div className="numbers">
                    <div>
                        <h3 className="num">40+</h3>
                        <p className="p-numbers">Food Partners</p>
                    </div>
                    <div>
                        <h3 className="num">459+</h3>
                        <p className="p-numbers">Trusted Clients</p>
                    </div>
                    <div>
                        <h3 className="num">12k+</h3>
                        <p className="p-numbers">Order Online</p>
                    </div>
                </div>
                
            </section>
   );
};
