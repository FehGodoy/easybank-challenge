import {Component} from 'react';
import './style.css';
import logo from '../../images/logo.svg';
import menu from '../../images/icon-hamburger.svg';
import closeM from '../../images/icon-close.svg';


class Header extends Component{      
   state = {
    openMenu: false,
    closeMenu: false,
   }

   toggle = () =>{
        this.setState({
            openMenu: !this.state.openMenu,
            closeMenu: !this.state.closeMenu
        })
   }
  
   
    render(){       
               
        
        return(
            <header>
                <div className="container">                    
                    <div className="logo">
                        <img src={logo} alt="EasyBank"/>
                    </div>
                    <div className="botaoMenu" onClick={this.toggle}>  
                    <img src={menu} alt="EasyBank" />           
                    </div>         
                        <nav className={this.state.openMenu ? 'mobileMenu active': 'mobileMenu'}>
                            <ul>
                                <li>
                                    <a href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Carrers
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className={this.state.closeMenu ? 'closeMenu active': 'closeMenu'} onClick={this.toggle}>
                            <img src={closeM} alt="EasyBank" />
                        </div>
                     
                    <nav className="menuDesktop">
                        <ul>
                            <li>
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Carrers
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="botao">
                        <a href="#">
                            Request Invite
                        </a>
                    </div>
                </div>                
            </header>
        )
    }
}

export default Header