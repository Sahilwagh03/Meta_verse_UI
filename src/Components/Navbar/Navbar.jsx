import React, { useState, useEffect } from 'react'
import './NavBar.css'

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
                        <span className={`logo-text ${isScrolled ? 'black' : 'white'}`}>MetaV</span>
                    </div>
                    <div className='nav_menu'>
                        <ul className='nav_lists'>
                            <li className={`nav_text ${isScrolled ? 'black' : 'white'}`}>Home</li>
                            <li className={`nav_text ${isScrolled ? 'black' : 'white'}`}>Aptitude Tests</li>
                            <li className={`nav_text ${isScrolled ? 'black' : 'white'}`}>LeaderBoard</li>
                            <li className={`nav_text ${isScrolled ? 'black' : 'white'}`}>About us</li>
                        </ul>
                    </div>


                    <div className='mobile_size'>
                        {/* <img onClick={() => setToggle(!toggle)} src={toggle ? close : menu} alt="" width={40} className={`${isScrolled ? 'black' : 'white'}`} /> */}
                        <div onClick={() => setToggle(!toggle)}>
                            {
                                toggle ?
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40px"
                                        height="40px"
                                        style={{ fill: isScrolled ? 'black' : 'white' }}
                                    >
                                        <path
                                            d="M19 6.41 L17.59 5 L12 10.59 L6.41 5 L5 6.41 L10.59 12 L5 17.59 L6.41 19 L12 13.41 L17.59 19 L19 17.59 L13.41 12 L19 6.41 z"
                                        />
                                    </svg>
                                    :
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="40px"
                                        height="40px"
                                        style={{ fill: isScrolled ? 'black' : 'white' }}
                                    >
                                        <path
                                            d="M2 5 L2 7 L22 7 L22 5 L2 5 z M2 11 L2 13 L22 13 L22 11 L2 11 z M2 17 L2 19 L22 19 L22 17 L2 17 z"
                                        />
                                    </svg>
                            }
                        </div>

                        <div className={` ${toggle ? 'flex' : 'hidden'} nav_mobile_menu`} >
                            <ul className='nav_lists_mobile'>
                                <li className={`nav_text ${isScrolled ? 'black' : 'white'}`}>Home</li>
                                <li className={`nav_text ${isScrolled ? 'black' : 'white'}`}>Aptitude Tests</li>
                                <li className={`nav_text ${isScrolled ? 'black' : 'white'}`}>LeaderBoard</li>
                                <li className={`nav_text ${isScrolled ? 'black' : 'white'}`}>About us</li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
