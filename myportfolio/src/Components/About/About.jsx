import React from 'react'
import './About.css'

import sesto from '../../assets/sesto-fiore.png'
import cherryUna from '../../assets/prima-cherry.png'

const About = () => {

  return (
    <div id='about' className="container">
        
        <img src={sesto} />
        <div className="aboutText">
            <h1>About Me</h1>
            <h3>
                Hello! <br /> I am <span className='nome'>Caterina</span>
            </h3>
            <img src={cherryUna} />
        </div>
        <div className="first-description">
            <h3>Web Developer based in <span className='flag'>Italy</span></h3>
            <div className="second-description">
                <h3>Self-learning <br /> student</h3>
                <h2>full of creativity, passion, always ready to learn</h2>
            </div>
        </div>


    </div>
  )
}

export default About