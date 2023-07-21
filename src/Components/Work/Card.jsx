import React from 'react'
import './Card.css'

const Card = (prop) => {
  return (
    <>
    <div className="card_container">
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
    </div>
    </>
  )
}

export default Card