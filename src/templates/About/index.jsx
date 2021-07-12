import './style.css';
import wallpaperAbout from '../../images/wallpaper-about.jpg';
import Restaurant from '../../images/image-restaurant.jpg';
import Airplane from '../../images/image-plane.jpg';
import Confetti from '../../images/image-confetti.jpg';
import Ceo from '../../images/ceo.jpg';

export const About = () =>{    
    return(
        <>
        <section className="wallpaperAbout" style={{
            backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.4) 0,rgba(0,0,0,.6) 100%),url(${wallpaperAbout})`
        }}>
            <div className="container">
                <div className="titulo">
                    About Us
                </div>
            </div>
        </section>
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
        </>
    )    
};

