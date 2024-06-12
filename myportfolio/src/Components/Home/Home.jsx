import React from 'react'
import './Home.css'

import sfondo from '../../assets/sfondo-portfolio.jpg'
import terzo from '../../assets/terzo-fiore.png'
import quarto from '../../assets/quarto-fiore.png'
import ottavo from '../../assets/ottavo-fiore.png'
import quinto from '../../assets/quinto-fiore.png'

const Home = () => {

  const parallax = document.querySelectorAll(".parallax");
  let xposition = 0;
  let yposition = 0;
  window.addEventListener("mousemove", (e) =>
      {
        xposition = e.clientX - window.innerWidth / 2;
        yposition = e.clientY - window.innerHeight / 2;

        console.log(xposition, yposition);
            
        parallax.forEach((el) => {
                
            let speedx = el.dataset.speedx;
            let speedy = el.dataset.speedy;
            let speedz = el.dataset.speedz;
                
            let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
            let zposition = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
                
            el.style.transform = `translateX(calc(-50% + ${xposition * speedx}px)) translateY(calc(-50% + ${yposition * speedy}px)) perspective(2300px) translateZ(${zposition * speedz}px)`; 
            
        });
    }
);

  return (
    <main id='home'>
    
        <div className="vignette"></div>
        <img src={sfondo} data-speedx="0.3" data-speedy="0.38" data-speedz="0" alt="sfondo" className="parallax sfondo" />
        <img src={terzo} data-speedx="0.135" data-speedy="0.305" data-speedz="0.26" alt="terzo" className="parallax terzo" />
        <img src={quarto} data-speedx="0.11" data-speedy="0.10" data-speedz="0.07" alt="quarto" className="parallax quarto" />
        <div class="parallax text">
          <h2>Caterina</h2>
          <h1>Resasco</h1>
        </div>
        <img src={ottavo} data-speedx="0.027" data-speedy="0.0345" data-speedz="0.11" alt="ottavo" className="parallax ottavo" />
        <img src={quinto} data-speedx="0.0235" data-speedy="0.22" data-speedz="0.10" alt="quinto" className="parallax quinto" />
    </main>
  )
}

export default Home