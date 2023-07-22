import React from 'react'
import About_img_1 from '../../assets/About_img_1.png'
import About_img_2 from '../../assets/About_img_2.png'
import './About.css'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <>
            <div className="About_section">
                <div className="About_container">
                    <div className="About_img">
                        <div className="About_img_container">
                            <div className="img_1">
                                <motion.img src={About_img_1} alt=""
                                    initial={{ opacity: 0, y: -100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    viewport={{once:true}}
                                />
                            </div>
                            <div className="img_2">
                                <motion.img src={About_img_2} alt=""
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    viewport={{once:true}}
                                />
                            </div>
                        </div>
                        <div className="About_heading">
                            <div className="About_heading_container">
                                <motion.h1
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    viewport={{once:true}}
                                >What is <span>Metaverse</span></motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                    viewport={{once:true}}
                                >Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo. Venenatis cras..</motion.p>
                                <motion.button className='About_btn'
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1 }}
                                    viewport={{once:true}}
                                >Know More</motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About