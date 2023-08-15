import React from "react";
import './HappyClientsSection.scss';
import avatar1 from './photo/avatar1.png';
import avatar2 from './photo/avatar2.png';
import arrows1 from './photo/arrows1.png';
import arrows2 from './photo/arrows2.png';

export const HappyClientsSection = () => {
  return (
    <section id="happy-clients">
        <h2>Happy Clients Says</h2>
        <div className="avatars">
            <div className="ava">
                <div className="avatar">
                    <img src={avatar1} alt="avatar-Image" />
                    <div className="name">
                        <h3>1.KHALIL NAZIR</h3>
                        <p className="avatar-info">CEO of UI.Desk</p>
                    </div>
                </div>
                <p>Thirty for remove plenty regard you summer though. He preference Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we.</p>
            
            </div>
            <div className="ava">
                <div className="avatar">
                    <img src={avatar1} alt="avatar-Image" />
                    <div className="name">
                        <h3>2.EEEEE</h3>
                        <p className="avatar-info">GGGGG</p>
                    </div>
                </div>
                <p>Thirty for remove plenty regard you summer though. He preference Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we.</p>
            
            </div>
            <div className="ava">
                <div className="avatar">
                    <img src={avatar2} alt="avatar-Image"/>
                    <div className="name">
                        <h3>3.ZEESHAN ANWER</h3>
                        <p className="avatar-info">CEO of UI Box</p>
                    </div>
                </div>
                <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
            
            </div>
            <div className="ava">
                <div className="avatar">
                    <img src={avatar2} alt="avatar-Image"/>
                    <div className="name">
                        <h3>4.jhghjk</h3>
                        <p className="avatar-info">CEO of UI Box</p>
                    </div>
                </div>
                <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
            
            </div>
            
        </div>
        <div className="icons">
            <button className="arrows"  ><img src={arrows1}/></button>
            <button className="arrows" ><img src={arrows2}/></button>
        </div>
        
        
     </section>
  );
};

//onClick={doSlide(-1)}
//onClick={doSlide(1)}