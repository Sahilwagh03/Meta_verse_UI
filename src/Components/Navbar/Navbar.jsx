import React, { useState, useEffect } from 'react'
import './NavBar.css'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    // State to track the scroll position
    const [isScrolled, setIsScrolled] = useState(false);

    // Function to handle the scroll event
    const handleScroll = () => {
        const scrollThreshold = 100; // You can adjust this threshold as needed
        setIsScrolled(window.scrollY > scrollThreshold);
    };

    // Add event listener for scroll when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className={`Nav_div ${isScrolled ? 'scrolled' : ''}`}>
                <nav className='navbar'>

                    <div className='Navbar_logo_flex'>
                        <span className={`logo-text ${isScrolled ? 'black': 'white'}`}>MetaV</span>
                    </div>
                    <div className='nav_menu'>
                        <ul className='nav_lists'>
                            <li className={`nav_text ${isScrolled ? 'black': 'white'}`}>Home</li>
                            <li className={`nav_text ${isScrolled ? 'black': 'white'}`}>Aptitude Tests</li>
                            <li className={`nav_text ${isScrolled ? 'black': 'white'}`}>LeaderBoard</li>
                            <li className={`nav_text ${isScrolled ? 'black': 'white'}`}>About us</li>
                        </ul>
                    </div>


                    <div className='mobile_size'>
                        <img onClick={() => setToggle(!toggle)} src={toggle ? close : menu} alt="" width={40} />

                        <div className={` ${toggle ? 'flex' : 'hidden'} nav_mobile_menu`} >
                            <ul className='nav_lists_mobile'>
                                <li className={`nav_text ${isScrolled ? 'black': 'white'}`}>Home</li>
                                <li className={`nav_text ${isScrolled ? 'black': 'white'}`}>Aptitude Tests</li>
                                <li className={`nav_text ${isScrolled ? 'black': 'white'}`}>LeaderBoard</li>
                                <li className={`nav_text ${isScrolled ? 'black': 'white'}`}>About us</li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar