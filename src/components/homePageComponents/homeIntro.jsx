import React from 'react';
import GraphicAnimation from '../graphicAnimation';
import animationData from "../../static/svgs/intro-animation-light.json";
// import BackgroundParticles from '../BackgroundParticles';

const Logo= require('../../static/images/iste-logo.png');
const Logo_Orange= require('../../static/images/iste-orange.png')
const Logo_black= require('../../static/images/iste-black.png')
const HomeIntro = () => {
  return (
    <div>
    <div className="intro-container container-fluid">
     
      <div className="row">
        <div className="left-content">
          <img src={Logo_Orange} alt="" className="intro-logo" />
          <h1 style={{ 'font-family': "'Catamaran', sans-serif"}}>ISTE<a style={{'color':'#ff7f50'}}>NITH</a></h1>
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
