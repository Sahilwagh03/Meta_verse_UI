import React from 'react'
import './Activities.css'
import metaverse_video from '../../assets/metaverse 1.png'
import play from '../../assets/play_btn.png'

const Activities = () => {
  return (
    <>
    <div className="Activities_section">
        <div className="Activities_container">
            <div className="Activities_heading">
                <h2>Our Latest <span>Activity</span></h2>
                <p>Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras</p>
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