import React from 'react'
import Lottie from "lottie-react"
import animationData from "../static/svgs/resourceAnimation.json"

const resourceAnimation = () => {
  return (
    <div>
        <h1>
            Resource Animation
        </h1>
        <Lottie animationData={animationData} />
    </div>
  )
}

export default resourceAnimation