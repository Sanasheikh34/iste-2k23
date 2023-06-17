import React from 'react'
import {motion} from "framer-motion"

const membersPage = () => {
  return (
    <motion.div inital = {{opacity:0}}
    animate = {{opacity:1}}
    exit = {{opacity:0}}
    transition = {{duration:0.5}} >membersPage</motion.div>
  )
}

export default membersPage