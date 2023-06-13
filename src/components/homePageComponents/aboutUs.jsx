import React,{useEffect,useRef} from 'react';
import bgImg from "../../static/images/teamiste-jan2k23.webp";
import {motion,useInView,useAnimation} from "framer-motion/dist/framer-motion"

// import { Parallax } from 'react-parallax';

const aboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});
  const mainControls = useAnimation();

  useEffect(()=>{
    if (isInView){
      mainControls.start("visible")
    }
  },(isInView))

  const divStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div ref={ref}>

    <motion.div style={divStyle} className='about-us-bg-img' 
    
    variants = {{
    hidden: {opacity:0,y:75},
    visible: {opacity:1,y:0},
    }}
    inital = "hidden"
    animate = {mainControls}
    transition = {{duration:0.5,delay:0.25}}
   >
    {/* // <Parallax strength={200} blur={{min:2,max:2}} bgImage={bgImg} > */}
      <div className="about-us-container container-fluid" >
        <div className="blur-div">

          <div className="about-us-box">
            <h2>About Us</h2>
            <p>
              The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit making Society for the Technical Education System in our country. The Students' Chapter NIT Hamirpur is the representative at NIT Hamirpur to promote such technical culture in our college. We at NITH, conduct various events within the college and also participate in inter-college fests.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
    {/* // </Parallax> */}
    </div>
  );
};

export default aboutUs;
