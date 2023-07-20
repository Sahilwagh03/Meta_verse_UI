import React from 'react'
import About_img_1 from '../../assets/About_img_1.png'
import About_img_2 from '../../assets/About_img_2.png'
import './About.css'
const About = () => {
    return (
        <>
            <div className="About_section">
                <div className="About_container">
                    <div className="About_img">
                        <div className="About_img_container">
                            <div className="img_1">
                                <img src={About_img_1} alt="" />
                            </div>
                            <div className="img_2">
                                <img src={About_img_2} alt="" />
                            </div>
                        </div>
                        <div className="About_heading">
                            <div className="About_heading_container">
                                <h1>What is <span>Metaverse</span></h1>
                                <p>Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo. Venenatis cras..</p>
                                <button className='About_btn'>Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About