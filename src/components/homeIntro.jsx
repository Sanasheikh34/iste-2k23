import React from 'react';
import Logo from '../static/images/iste-logo-blue.png';
import GraphicAnimation from './graphicAnimation';
import animationData from "../static/svgs/intro-animation-light.json"


const HomeIntro = () => {
  return (
    <div className="intro-container container-fluid">
      <div className="row">
        <div className="left-content">
          <img src={Logo} alt="" className="intro-logo" />
          <h1>ISTE</h1>
        </div>
        <div className="right-content">
        <GraphicAnimation animationData={animationData} />
          {/* Add content for the right column */}
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
