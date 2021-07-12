import {Component} from 'react';
import './style.css';
import Restaurant from '../../../images/image-restaurant.jpg';
import Airplane from '../../../images/image-plane.jpg';
import Confetti from '../../../images/image-confetti.jpg';


export class AboutSection extends Component{  
    render ()  {
        return(
        
            <section className="about">
            <div className="container">
                <div className="boxTexto">
                    <div className="titulo">
                        <h1>Lorem Ipsum Dolor</h1>
                    </div>
                    <div className="texto">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat iusto accusamus quis veniam odit alias mollitia non dolores molestias repellendus, voluptas aliquam, animi neque, enim tempora! Voluptatum, aliquam ab! Repellendus.</p>
                    </div>
                </div>
                <div className="images">
                    <div className="firstsImages">
                        <div className="image">
                            <figure>
                                <img src={Restaurant} alt=" EasyBank" />
                            </figure>
                        </div>
                        <div className="image">
                            <figure>
                                <img src={Airplane} alt=" EasyBank" />
                            </figure>
                        </div>
                    </div>
                    <div className="secondImage">
                        <figure>
                            <img src={Confetti} alt="EasyBank" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>   
            
        ) 
    }
   
};


export default AboutSection
