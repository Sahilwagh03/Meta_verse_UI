import React from 'react'
import './Hero.css'
import Hero_img from '../../assets/Hero.png'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <>
            <div className="hero_section">
                <div className="hero_container">
                    <div className="hero_grid">
                        <div className="hero_header">
                            <div className="hero_header_flex">
                                <div className="hero_heading">
                                    <motion.h1
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    >Explore the future of the <span>Metaverse</span></motion.h1>
                                </div>
                                <motion.div className="hero_p"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                >
                                    Let's explore and create your experience with metaverse.
                                </motion.div>
                                <motion.div className="hero_btn_flex"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 1 }}
                                >
                                    <button>Get started</button>
                                    <button>Explore Now</button>
                                </motion.div>
                                <motion.div className="hero_stats"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 1.2 }}
                                >
                                    <div className="hero_stats_flex">
                                        <span>29K+</span>
                                        <span>Artworks</span>
                                    </div>
                                    <div className="hero_stats_flex">
                                        <span>18K+</span>
                                        <span>Artists</span>
                                    </div>
                                    <div className="hero_stats_flex">
                                        <span>25K+</span>
                                        <span>Auction</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="hero_img">
                            <motion.img src={Hero_img} alt=""
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }} />
                            <div className="blur_black"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero