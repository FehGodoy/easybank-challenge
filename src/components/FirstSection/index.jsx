import {Component} from 'react';
import './style.css';
import wallpaper from '../../images/image-mockups.png';

export class Header extends Component{
    render(){
        return(
           <section className="wallpaper">
               <div className="container">
                   <div className="box">
                       <div className="tituloTexto">
                           <div className="titulo">
                                <h1>Next Generation digital banking</h1>
                           </div>
                           <div className="subtitulo">
                                <h6>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting,investing, and much more.</h6>
                           </div>
                           <div className="botao">
                                <a href="#">
                                    Request Invite
                                </a>
                            </div>
                       </div>
                       <div className="imagemMockup">
                           <div className="imgIntro">
                                <figure>
                                    <img src={wallpaper} alt="EasyBank" />
                                </figure>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
        )
    }
}

export default Header