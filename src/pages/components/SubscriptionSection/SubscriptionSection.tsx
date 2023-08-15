import React from "react";
import './SubscriptionSection.scss';

export const SubscriptionSection = () => {
  return (
    <section id="subscription">
        <h2>Subscribe to the Newsletter</h2>
        <p>Enter your email below to get our daily offers and news</p>
        <div className="email-item">
            <input placeholder="Enter your email." className="email"/>
            <a href="#" className="btn fill">Get Started</a>
        </div>
     </section>
  );
  };