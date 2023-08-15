import React from "react";
import './BestChefsSection.scss';
import check from './photo/check.png';
import chef from './photo/chef.png';

export const BestChefsSection = () => {
  return (
    <section id="best-chefs" className="container">
        <div className="best-chefs-content">
            <h2>Cooked by the Best Chefs</h2>
            <p className="m-bottom">Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove plenty regard you summer though. He preference connection astonished on of ye.</p>            
           <div className="check">
            <div className="direction">
            <img src={check} alt="chef-Image" className="im-width"/> 
            <p>A guaranteed delicious meal</p> 
           </div>
           <div className="direction">
            <img src={check} alt="chef-Image" className="im-width"/> 
            <p>Food is guaranteed hygienic</p> 
           </div>
           <div className="direction">
            <img src={check} alt="chef-Image" className="im-width" />  
            <p>Cooked quickly</p> 
           </div>
        </div>
                     
        </div>
        <div className="best-chefs-cards">
            <div className="left">
                <img src={chef} alt="chef-Image" className="chef-foto"/>                
            </div>             
        </div>        
     </section>
  );
};