import { Component } from 'react';
import FirstSection from '../../components/HomeComponents/FirstSection';
import SecondSection from '../../components/HomeComponents/SecondSection';
import Articles from '../../components/HomeComponents/Articles';



export class Home extends Component{
    render () {
        return(
            <>                
                <FirstSection />
                <SecondSection />
                <Articles />                
            </>
        )
    }
}

export default Home;