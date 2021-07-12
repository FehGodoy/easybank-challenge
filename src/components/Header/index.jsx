import {Component} from 'react';
import './style.css';
import logo from '../../images/logo.svg';
import menu from '../../images/icon-hamburger.svg';
import closeM from '../../images/icon-close.svg';
import {Link} from 'react-router-dom';


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
                        <Link to="/"> 
                            <img src={logo} alt="EasyBank" />
                        </Link>                         
                    </div>
                    <div className="botaoMenu" onClick={this.toggle}>  
                    <img src={menu} alt="EasyBank" />           
                    </div>         
                        <nav className={this.state.openMenu ? 'mobileMenu active': 'mobileMenu'}>
                            <ul>
                                <li onClick={this.toggle}>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li onClick={this.toggle}>
                                    <Link to="/about">
                                        About
                                    </Link>
                                </li>
                                <li onClick={this.toggle}>
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </li>
                                <li onClick={this.toggle}>
                                    <Link to="/blog">
                                        Blog
                                    </Link>
                                </li>
                                <li onClick={this.toggle}>
                                    <Link to="/Carrers">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className={this.state.closeMenu ? 'closeMenu active': 'closeMenu'} onClick={this.toggle}>
                            <img src={closeM} alt="EasyBank" />
                        </div>
                     
                    <nav className="menuDesktop">
                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/Carrers">
                                    About
                                </Link>
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