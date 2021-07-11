import {Component} from 'react';
import './style.css';
import iconApi from '../../images/icon-api.svg';
import iconBudgeting from '../../images/icon-budgeting.svg';
import iconOnboarding from '../../images/icon-onboarding.svg';
import iconOnline from '../../images/icon-online.svg';

export class Header extends Component{
    render(){
        return(
           <section className="details">
               <div className="container">
                   <div className="box">
                       <div className="allContainer">
                           <div className="titulo">
                               <h1>Why choose EasyBank?</h1>
                           </div>
                           <div className="subtitulo">
                               <h6>We leverage Open Banking to turn your bank account into your financial hub. <br /> Control your finances like never before </h6>
                           </div>
                       </div>
                       <div className="containerIcons">
                           <div className="boxIcons">
                               <div className="icone">
                                   <figure>
                                       <img src={iconOnline} alt="EasyBank" />
                                   </figure>
                               </div>
                               <div className="titulo">
                                   <h3>Online Banking</h3>
                               </div>
                               <div className="texto">
                                   <p>
                                       Our Modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                                   </p>
                               </div>
                           </div>
                           <div className="boxIcons">
                               <div className="icone">
                                   <figure>
                                       <img src={iconBudgeting} alt="EasyBank" />
                                   </figure>
                               </div>
                               <div className="titulo">
                                   <h3>Simple Budgeting</h3>
                               </div>
                               <div className="texto">
                                   <p>
                                      See exactly where your money goes each month. Receive notifications when you're close to hiting your limits.
                                   </p>
                               </div>
                           </div>
                           <div className="boxIcons">
                               <div className="icone">
                                   <figure>
                                       <img src={iconOnboarding} alt="EasyBank" />
                                   </figure>
                               </div>
                               <div className="titulo">
                                   <h3>Fast onBoarding</h3>
                               </div>
                               <div className="texto">
                                   <p>
                                       We don't do branches. Open you account in minutes online start taking control of your finances right away.
                                   </p>
                               </div>
                           </div>
                           <div className="boxIcons">
                               <div className="icone">
                                   <figure>
                                       <img src={iconApi} alt="EasyBank" />
                                   </figure>
                               </div>
                               <div className="titulo">
                                   <h3>Open API</h3>
                               </div>
                               <div className="texto">
                                   <p>
                                       Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
                                   </p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
        )
    }
}

export default Header