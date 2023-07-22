import React from 'react'
import './Activities.css'
import metaverse_video from '../../assets/metaverse 1.png'
import play from '../../assets/play_btn.png'
import { motion } from 'framer-motion'

const Activities = () => {
  return (
    <>
      <div className="Activities_section">
        <div className="Activities_container">
          <div className="Activities_heading">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >Our Latest <span>Activity</span></motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras</motion.p>
          </div>
          <div className="Activities_video">
            <img src={metaverse_video} alt="" />
            <img src={play} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Activities