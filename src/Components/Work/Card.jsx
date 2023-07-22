import React from 'react'
import './Card.css'
import {motion} from 'framer-motion'

const Card = (prop) => {
  return (
    <>
    <motion.div className="card_container"
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1 , delay:0.5}}
    >
        <div className="card_img">
            <img src={prop.Data.imgUrl} alt="" />
        </div>
        <div className="card_info">
            <h2>{prop.Data.heading}</h2>
            <p>{prop.Data.para}</p>
            <div className="card_btn_grid">
                <button>Try now</button>
                <button>Explore now</button>
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default Card