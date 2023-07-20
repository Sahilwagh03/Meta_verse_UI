import React, { useState } from 'react'
import './NavBar.css'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className='Nav_div'>
                <nav className='navbar'>

                    <div className='Navbar_logo_flex'>
                        <span className="logo-text">MetaV</span>
                    </div>
                    <div className='nav_menu'>
                        <ul className='nav_lists'>
                            <li className='nav_text'>Home</li>
                            <li className='nav_text'>Aptitude Tests</li>
                            <li className='nav_text'>LeaderBoard</li>
                            <li className='nav_text'>About us</li>
                        </ul>
                    </div>


                    <div className='mobile_size'>
                        <img onClick={() => setToggle(!toggle)} src={toggle ? close : menu} alt="" width={40} />

                        <div className={` ${toggle ? 'flex' : 'hidden'} nav_mobile_menu`} >
                            <ul className='nav_lists_mobile'>
                                <li className='nav_text'>Home</li>
                                <li className='nav_text'>Aptitude Tests</li>
                                <li className='nav_text'>LeaderBoard</li>
                                <li className='nav_text'>About us</li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar