import React, { useRef } from "react";
import GraphicAnimation from '../graphicAnimation';
import techAnimation from "../../static/svgs/tech-animation.json";
import prAnimation from "../../static/svgs/pr-animation.json";
import designAnimation from "../../static/svgs/design-animation.json";
import financeAnimation from "../../static/svgs/finance-animation.json";
import { motion } from "framer-motion";

const Domains = () => {

  const ref = useRef(null);

  return (
    <div ref={ref}>
      <motion.div className="domain-container">
        <div className="center-header-div">
          <h2 className='center-heading'>Domains</h2>
        </div>
        <div className="row">
          <div className="domain-card">
            <div className="graphic-animation-container">
              <GraphicAnimation animationData={financeAnimation} />
            </div>
            <h2 className="domain-heading">Finance</h2>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam similique, assumenda odit deleniti, omnis repellendus accusantium corrupti atque adipisci, facere velit sunt aperiam labore porro consequuntur. Itaque, eveniet necessitatibus.</p>
          </div>

          <div className="domain-card">
            <div className="graphic-animation-container">
              <GraphicAnimation animationData={designAnimation} />
            </div>
            <h2 className="domain-heading">Design</h2>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam similique, assumenda odit deleniti, omnis repellendus accusantium corrupti atque adipisci, facere velit sunt aperiam labore porro consequuntur. Itaque, eveniet necessitatibus.</p>
          </div>

          <div className="domain-card">
            <div className="graphic-animation-container">
              <GraphicAnimation animationData={prAnimation} />
            </div>
            <h2 className="domain-heading">Public Relation</h2>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam similique, assumenda odit deleniti, omnis repellendus accusantium corrupti atque adipisci, facere velit sunt aperiam labore porro consequuntur. Itaque, eveniet necessitatibus.</p>
          </div>

          <div className="domain-card">
            <div className="graphic-animation-container">
              <GraphicAnimation animationData={techAnimation} />
            </div>
            <h2 className="domain-heading">Tech</h2>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam similique, assumenda odit deleniti, omnis repellendus accusantium corrupti atque adipisci, facere velit sunt aperiam labore porro consequuntur. Itaque, eveniet necessitatibus.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Domains;
