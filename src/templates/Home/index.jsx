import { Component } from 'react';
import Header from '../../components/Header';
import FirstSection from '../../components/FirstSection';
import SecondSection from '../../components/SecondSection';
import Articles from '../../components/Articles';
import Footer from '../../components/Footer';


export class Home extends Component{
    render () {
        return(
            <>
                <Header />
                <FirstSection />
                <SecondSection />
                <Articles />
                <Footer />
            </>
        )
    }
}

export default Home;