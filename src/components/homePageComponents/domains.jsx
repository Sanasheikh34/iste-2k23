import React,{useEffect,useRef} from 'react';
import Logo from '../../static/images/iste-logo-blue.png';

import GraphicAnimation from '../graphicAnimation';


import animationData from "../../static/svgs/intro-animation-light.json"
import techAnimation from "../../static/svgs/tech-animation.json"
import prAnimation from "../../static/svgs/pr-animation.json"
import designAnimation from "../../static/svgs/design-animation.json"
import financeAnimation from "../../static/svgs/finance-animation.json"

// import BackgroundParticles from '../BackgroundParticles';
import {motion,useInView,useAnimation} from "framer-motion/dist/framer-motion"

const domains = () => {

    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    const mainControls = useAnimation();
  
    useEffect(()=>{
      if (isInView){
        mainControls.start("visible")
      }
    },(isInView))
  
    return (
      <div ref={ref}>
      <motion.div className="domain-container"
       variants = {{
        hidden: {opacity:0,y:75},
        visible: {opacity:1,y:0},
      }}
      inital = "hidden"
      animate = {mainControls}
      transition = {{duration:0.5,delay:0.25}}
      >
      <div className="center-header-div">
        <h2 className='center-heading'>Domains</h2>
      </div>
        <div className="row">

            <div className="domain-card">
              <div className="graphic-animation-container">
                <GraphicAnimation animationData={financeAnimation}   />
              </div>
              <h2 className="domain-heading">Finance</h2>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam similique, assumenda odit deleniti, omnis repellendus accusantium corrupti atque adipisci, facere velit sunt aperiam labore porro consequuntur. Itaque, eveniet necessitatibus.</p>
            </div> 

            <div className="domain-card">
              <div className="graphic-animation-container">
                <GraphicAnimation animationData={designAnimation}   />
              </div>
              <h2 className="domain-heading">Design</h2>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam similique, assumenda odit deleniti, omnis repellendus accusantium corrupti atque adipisci, facere velit sunt aperiam labore porro consequuntur. Itaque, eveniet necessitatibus.</p>
            </div> 

            <div className="domain-card">
              <div className="graphic-animation-container">
                <GraphicAnimation animationData={prAnimation}   />
              </div>
              <h2 className="domain-heading">Public Relation</h2>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam similique, assumenda odit deleniti, omnis repellendus accusantium corrupti atque adipisci, facere velit sunt aperiam labore porro consequuntur. Itaque, eveniet necessitatibus.</p>
            </div> 

            <div className="domain-card">
              <div className="graphic-animation-container">
                <GraphicAnimation animationData={techAnimation}   />
              </div>
              <h2 className="domain-heading">Tech</h2>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam similique, assumenda odit deleniti, omnis repellendus accusantium corrupti atque adipisci, facere velit sunt aperiam labore porro consequuntur. Itaque, eveniet necessitatibus.</p>
            </div> 

        </div>
        
      </motion.div>
      </div>
    );
  }

export default domains