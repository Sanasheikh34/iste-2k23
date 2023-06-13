import React from 'react';
import bgImg from "../../static/images/teamiste-jan2k23.webp";

const aboutUs = () => {
  const divStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    // <div style={divStyle}>
    <div className="about-us-container container-fluid" style={divStyle}>
    <div className="blur-div">

      <div className="about-us-box">
      <h2>About Us</h2>
      <p>
        The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit making Society for the Technical Education System in our country. The Students' Chapter NIT Hamirpur is the representative at NIT Hamirpur to promote such technical culture in our college. We at NITH, conduct various events within the college and also participate in inter-college fests.
      </p>
    </div>
    </div>
    </div>
    // </div>
  );
};

export default aboutUs;
