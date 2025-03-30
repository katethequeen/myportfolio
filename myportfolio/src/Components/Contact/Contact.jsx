import React from 'react'
import './Contact.css'

import sfondino from '../../assets/sfondo-contact.png'
import facebook from '../../assets/facebook-logo.png'
import linkedin from '../../assets/linkedin-logo.png'
import email from '../../assets/email_logo.png'
import copy from '../../assets/9021493_copyright_bold_icon.png'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "7cbf5386-d8e8-416a-928f-b86ba3291a66");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
          document.querySelector('.contact-details').reset();
        }
      };

  return (
    <div id='contact' className='contact-box'>
        <img src= {sfondino} />
        <h2>Contact me!</h2>
        <div className="social-icons">
            <a href='mailto:cateresa4@gmail.com'><img src={email} className='email'/></a>
            <a href='https://www.facebook.com/profile.php?id=100069746681435'><img src={facebook} className='facebook'/></a>
            <a href='https://www.linkedin.com/in/caterina-resasco/'><img src={linkedin} className='linkedin'/></a>
        </div>

        <div className="talk">
            <h3>Let's talk</h3>
        </div>
        <form onSubmit={onSubmit} className='contact-details'>
          
            <input type='email' placeholder='Enter your email' name='email' className='user-email' />
          
          
            <textarea name='message' rows='8' placeholder='Enter your message' className='message'></textarea>
          
            <button type="submit" className="contact-submit" >Submit</button>
        </form>
        <div className="copy-box">
          <img src={copy} className='copyright'/>
          <h3>2024 -Caterina Resasco</h3>
        </div>

    </div>
  )
}

export default Contact