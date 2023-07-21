import React from 'react'
import './Work.css'
import work_1 from '../../assets/work_1.png'
import work_2 from '../../assets/work_2.png'
import work_3 from '../../assets/work_3.png'
import work_4 from '../../assets/work_4.png'
import work_5 from '../../assets/work_5.png'
import work_6 from '../../assets/work_6.png'
import Card from './Card'


const Work = () => {

    const CardData = [
        {
            imgUrl:work_1,
            heading:"Discuss with Colleagues",
            para:"Working online is the same experience as work ing in an office. This will be. achieved with.."
        },
        {
            imgUrl:work_2,
            heading:"Virtual Reality Concert",
            para:"Watching concerts virtually is one of the things that can be done in cyberspace.."
        },
        {
            imgUrl:work_3,
            heading:"Playing Games",
            para:"For gamers, the metaverse could be an interesting platform of choice for the.."
        },
        {
            imgUrl:work_4,
            heading:"Online Travel",
            para:"With cyberspace, online travel is certainly not impossible. We can do this with the help of.."
        },
        {
            imgUrl:work_5,
            heading:"Artworks",
            para:"In the past, works of art such as paintings could only be seen in the real world.."
        },
        {
            imgUrl:work_6,
            heading:"Digital Clothing",
            para:"The community has also been active with the emergence of paintings or drawings.."
        },
    ]

  return (
    <>
    <div className="Work_section">
        <div className="Work_container">
            <div className="Work_heading">
                <h2>How does the <span>Metaverse</span> work</h2>
                <p>Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies. Venenatis cras</p>
            </div>
            <div className="Work_grid">
                {
                    CardData.map((cardData)=>
                    (
                        <>
                        <Card Data={cardData}/>
                        </>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Work