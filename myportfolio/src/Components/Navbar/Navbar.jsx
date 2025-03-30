import React from 'react'
import './Navbar.css'

import nobg from '../../assets/no-bg-sfondo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src= {nobg} alt="#" className="logo" />
            <ul>
                <li><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' href='#about'><p>About Me</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' href='#contact'><p>Contact</p></AnchorLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar