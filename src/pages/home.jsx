import React from 'react'
import HomeIntro from '../components/homePageComponents/homeIntro'
import MessageWidget from '../components/ChatBot'
import AboutUs from "../components/homePageComponents/aboutUs"
import {motion} from "framer-motion/dist/framer-motion"
import Domains from '../components/homePageComponents/domains'
import Events from "../components/homePageComponents/eventBrief"
const HomePage = () => {
  return (
    <motion.div
    inital = {{opacity:0}}
    animate = {{opacity:1}}
    exit = {{opacity:0}}
    transition = {{duration:0.5}} 
    >
    <HomeIntro />
    <AboutUs />
    <Domains />
    <Events />
    <MessageWidget />
    </motion.div>
  );
};

export default HomePage;
