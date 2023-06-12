import React from 'react'
import Particles from "react-tsparticles"
import particlesConfig from './config/particles_config'

const particlesBackground = () => {
  return (
    <Particles options={{
        background:
        {
            color : "#fff"
        }
    }} />
 
    
  )
} 

export default particlesBackground