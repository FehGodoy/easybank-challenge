import {Component} from 'react';
import './style.css';
import Currency from '../../images/image-currency.jpg';
import Restaurant from '../../images/image-restaurant.jpg';
import Airplane from '../../images/image-plane.jpg';
import Confetti from '../../images/image-confetti.jpg';

class BlogPage extends Component{
    render(){
        return(
           <section className="articles">
               <div className="container">
                   <div className="box">
                       <div className="tituloAll">
                           <h1>Latest Articles</h1>
                       </div>
                       <div className="boxArticles">
                           <div className="boxArt">
                               <div className="image">
                                   <img src={Currency} alt="EasyBank" />
                               </div>
                               <div className="boxContent">
                                    <div className="author">
                                        <p>By Claire Robinson</p>
                                    </div>
                                    <div className="titulo">
                                        <h4>Receive Money in any currency with no feets</h4>
                                    </div>
                                    <div className="texto">
                                        <p>
                                        Lorem ipsum potenti suscipit vivamus tempus integer aliquet netus lobortis aliquam, quis diam orci dapibus cubilia sed mollis aenean scelerisque, blandit consequat erat donec aenean conubia mauris sem phasellus. 
                                        </p>
                                    </div>
                               </div>                               
                           </div>
                           <div className="boxArt">
                               <div className="image">
                                   <img src={Restaurant} alt="EasyBank" />
                               </div>
                               <div className="boxContent">
                                    <div className="author">
                                        <p>By Claire Robinson</p>
                                    </div>
                                    <div className="titulo">
                                        <h4>Treat yourself without worrying about money</h4>
                                    </div>
                                    <div className="texto">
                                        <p>
                                        Lorem ipsum potenti suscipit vivamus tempus integer aliquet netus lobortis aliquam, quis diam orci dapibus cubilia sed mollis aenean scelerisque, blandit consequat erat donec aenean conubia mauris sem phasellus. 
                                        </p>
                                    </div>
                               </div>                               
                           </div>
                           <div className="boxArt">
                               <div className="image">
                                   <img src={Airplane} alt="EasyBank" />
                               </div>
                               <div className="boxContent">
                                    <div className="author">
                                        <p>By Claire Robinson</p>
                                    </div>
                                    <div className="titulo">
                                        <h4>Take your Easybank card wherever you go</h4>
                                    </div>
                                    <div className="texto">
                                        <p>
                                        Lorem ipsum potenti suscipit vivamus tempus integer aliquet netus lobortis aliquam, quis diam orci dapibus cubilia sed mollis aenean scelerisque, blandit consequat erat donec aenean conubia mauris sem phasellus. 
                                        </p>
                                    </div>
                               </div>                               
                           </div>
                           <div className="boxArt">
                               <div className="image">
                                   <img src={Confetti} alt="EasyBank" />
                               </div>
                               <div className="boxContent">
                                    <div className="author">
                                        <p>By Claire Robinson</p>
                                    </div>
                                    <div className="titulo">
                                        <h4>Our invite-only Beta accounts are now live!</h4>
                                    </div>
                                    <div className="texto">
                                        <p>
                                        Lorem ipsum potenti suscipit vivamus tempus integer aliquet netus lobortis aliquam, quis diam orci dapibus cubilia sed mollis aenean scelerisque, blandit consequat erat donec aenean conubia mauris sem phasellus. 
                                        </p>
                                    </div>
                               </div>                               
                           </div>
                       </div>
                   </div>
               </div>
           </section>
        )
    }
}

export default BlogPage