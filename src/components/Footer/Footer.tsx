import React from "react";
import './Footer.scss';
import logo from './photo/logo.png';

export const Footer = () => {
  return (
    <footer>
        <div className="grid-footer">
            <div className="grid1">
                <img src={logo} alt="Logo" className="logo"/>
                <p className="desk">On formed merits hunted unable merely by mr whence or.</p>
            </div>
            <div className="grid2" grid-column={2}>
                <h3>Home</h3>
                <a href="#" className="btn foot">Company</a>
                <a href="#" className="btn foot">News</a>
                <a href="#" className="btn foot">Team</a>
            </div>
            <div className="grid2" grid-column={3}>
                <h3>About</h3>
                <a href="#" className="btn foot">History</a>
                <a href="#" className="btn foot">Service</a>
                <a href="#" className="btn foot">Pricing</a>
            </div>
            <div className="grid2" grid-column={4}>
                <h3>Partner</h3>
                <a href="#" className="btn foot">Business</a>
                <a href="#" className="btn foot">Plan</a>
                <a href="#" className="btn foot">Marketing</a>
            </div>
            <div className="grid2" grid-column={5}>
                <h3>Contact</h3>
                <a href="#" className="btn foot">UI.desk</a>
                <a href="#" className="btn foot">(465)954-8487</a>
                <a href="#" className="btn foot">Lahore, Pakistan</a>
            </div> 
        </div>
        
        <p className="all-right">© Copyright 2020 by ui.desk. All right reserved.</p> 
     </footer>
  );
  };