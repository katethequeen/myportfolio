import React from 'react'
import './About.css'

import sesto from '../../assets/sesto-fiore.png'
import cherryUna from '../../assets/prima-cherry.png'
import profilo from '../../assets/immagineProfilo.png'

const About = () => {

    const parallax = document.querySelector(".parallax");
    let xposition = 0;
    let yposition = 0;
    window.addEventListener("mousemove", (e) =>
      {
        xposition = e.clientX - window.innerWidth / 2;
        yposition = e.clientY - window.innerHeight / 2;
            
        parallax.forEach((el) => {
                
            let speedx = el.dataset.speedx;
            let speedy = el.dataset.speedy;
            let speedz = el.dataset.speedz;
                
            let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
            let zposition = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
                
            el.style.transform = `translateX(calc(-50% + ${xposition * speedx}px)) translateY(calc(-50% + ${yposition * speedy}px)) perspective(2300px) translateZ(${zposition * speedz}px)`; 
            
        });
    });

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
                <h3>Self-learning student</h3>
                <h2>full of creativity, passion, always ready to learn</h2>
            </div>
        </div>
        <img src={profilo} data-speedx="0.1" data-speedy="0.022" data-speedz="0.03" alt="profilo" className='profilo parallax'/>


    </div>
  )
}

export default About