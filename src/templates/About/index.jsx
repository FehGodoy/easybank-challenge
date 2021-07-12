// import {Wallpaper} from '../../components/WallpaperSection';
import AboutSection from '../../components/AboutComponents/SectionAbout';
import TeamSection from '../../components/AboutComponents/SectionTeam';
import wallpaperAbout from '../../images/wallpaper-about.jpg';
import {Component} from 'react'; // ou React from 'react'

class About extends Component{    
    state ={
        title: 'About Us'
    }
    render(){
        const {title} = this.state;
        return(
            <>
            <section className="wallpaperAbout" style={{
        backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.4) 0,rgba(0,0,0,.6) 100%),url(${wallpaperAbout})`
            }}>
                <div className="container">
                    <div className="titulo">
                        {title}
                    </div>
                </div>
            </section> 
            <AboutSection />
            <TeamSection />
            </>
        )  
    }
    
};

export default About;