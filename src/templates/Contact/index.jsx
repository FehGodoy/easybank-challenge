import './style.css';
import wallpaperAbout from '../../images/wallpaper-about.jpg';
import { FaFacebookF,FaInstagram,FaLinkedinIn, FaEnvelope,FaPhoneAlt } from "react-icons/fa";

export const Contact = () =>{    
    return(
        <>
        <section className="wallpaperAbout" style={{
        backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.4) 0,rgba(0,0,0,.6) 100%),url(${wallpaperAbout})`
        }}>
            <div className="container">
                <div className="titulo">
                    Contact
                </div>
            </div>
        </section>
        <section className="contato">
            <div className="container">
                <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.37669699613!2d-122.18118108834713!3d37.40299366458721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sVale%20do%20Sil%C3%ADcio%2C%20CA%2C%20EUA!5e0!3m2!1spt-PT!2sbr!4v1626052987373!5m2!1spt-PT!2sbr" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="infoContact">
                    <div className="titulo">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="subtitulo">
                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
                    </div>
                    <div className="box">
                        <ul>
                            <li>
                                <FaFacebookF />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                            <li>
                                <FaLinkedinIn />
                            </li>
                            <li>
                                <FaEnvelope />
                            </li>
                            <li>
                                <FaPhoneAlt />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )    
};

