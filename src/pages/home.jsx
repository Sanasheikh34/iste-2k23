import React from 'react'
import HomeIntro from '../components/homePageComponents/homeIntro'
import MessageWidget from '../components/ChatBot'
import AboutUs from "../components/homePageComponents/aboutUs"

const HomePage = () => {
  return (
    <div>
    <HomeIntro />
    <AboutUs />
    <HomeIntro />
    <MessageWidget />
    </div>
  );
};

export default HomePage;
