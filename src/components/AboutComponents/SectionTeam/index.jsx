import {Component} from 'react';
import './style.css';
import Ceo from '../../../images/ceo.jpg';


export class TeamSection extends Component{  
    render ()  {
        return(
        
            <section className="team">
            <div className="container">
                <div className="AllRow">
                    <div className="titulo">
                        <h2>
                            Meet Our Team
                        </h2>
                    </div>
                    <div className="subtitulo">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laudantium ullam facilis. Facilis molestias, placeat officiis possimus et cupiditate incidunt voluptates deserunt vitae magnam. Quia ipsum magni temporibus dicta optio?</p>
                    </div>
                </div>  
                <div className="rowTeam">
                    <div className="team">
                        <div className="boxTeam">
                            <div className="image">
                                <img src={Ceo } alt="EasyBank" />    
                            </div> 
                            <div className="titulo">
                                <h2>Jonathan Walker</h2>
                            </div>   
                            <div className="function">
                                <span>CEO</span>
                            </div>
                        </div>    
                    </div>        
                    <div className="team">
                        <div className="boxTeam">
                            <div className="image">
                                <img src={Ceo } alt="EasyBank" />    
                            </div> 
                            <div className="titulo">
                                <h2>Jonathan Walker</h2>
                            </div>   
                            <div className="function">
                                <span>CEO</span>
                            </div>
                        </div>    
                    </div> 
                    <div className="team">
                        <div className="boxTeam">
                            <div className="image">
                                <img src={Ceo } alt="EasyBank" />    
                            </div> 
                            <div className="titulo">
                                <h2>Jonathan Walker</h2>
                            </div>   
                            <div className="function">
                                <span>CEO</span>
                            </div>
                        </div>    
                    </div> 
                    <div className="team">
                        <div className="boxTeam">
                            <div className="image">
                                <img src={Ceo } alt="EasyBank" />    
                            </div> 
                            <div className="titulo">
                                <h2>Jonathan Walker</h2>
                            </div>   
                            <div className="function">
                                <span>CEO</span>
                            </div>
                        </div>    
                    </div>       
                </div>
            </div>
        </section>
            
        ) 
    }
   
};


export default TeamSection
