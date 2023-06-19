import React from 'react';
import GraphicAnimation from '../graphicAnimation';
import animationData from "../../static/svgs/intro-animation-light.json";
// import BackgroundParticles from '../BackgroundParticles';

const Logo= require('../../static/images/iste-logo.png');

const HomeIntro = () => {
  return (
    <div>
    <div className="intro-container container-fluid">
     
      <div className="row">
        <div className="left-content">
          <img src={Logo} alt="" className="intro-logo" />
          <h1>ISTE NITH</h1>
          <div class="animated-text">
            WE ARE <span></span>
          </div>
        </div>
        <div className="right-content"> 
          <GraphicAnimation animationData={animationData} />
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default HomeIntro;
