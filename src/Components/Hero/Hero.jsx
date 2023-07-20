import React from 'react'
import './Hero.css'
import Hero_img from '../../assets/Hero.png'

const Hero = () => {
    return (
        <>
            <div className="hero_section">
                <div className="hero_container">
                    <div className="hero_grid">
                        <div className="hero_header">
                            <div className="hero_header_flex">
                                <div className="hero_heading">
                                    <h1>Explore the future of the <span>Metaverse</span></h1>
                                </div>
                                <div className="hero_p">
                                    Let's explore and create your experience with metaverse.
                                </div>
                                <div className="hero_btn_flex">
                                    <button>Get started</button>
                                    <button>Explore Now</button>
                                </div>
                                <div className="hero_stats">
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
                                </div>
                            </div>
                        </div>
                        <div className="hero_img">
                            <img src={Hero_img} alt="" />
                            <div className="blur_black"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero