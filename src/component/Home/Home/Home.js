import React from 'react';
import AllServices from '../AllServices/AllServices';
import Consultation from '../Consultation/Consultation';
import CountryList from '../CountryList/CountryList';
import HomeAboutCompany from '../HomeAboutCompany/HomeAboutCompany';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCard from '../HomeCard/HomeCard';
import Teams from '../Teams/Teams';
import './Home.css';

const Home = () => {
    return (
        <div >
            <HomeBanner></HomeBanner>
            <HomeCard></HomeCard>
            <HomeAboutCompany></HomeAboutCompany>
            <CountryList></CountryList>
            <Consultation></Consultation>
            <AllServices></AllServices>
            <Teams></Teams>
        </div>
    );
};

export default Home;