import React from 'react';
import ContactForm from '../components/contactForm'

import '../styles/contact.scss'

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="left-container">
          <div className="main" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <div className="box"></div>
            <div className="image">
              <div className="socials" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
                <span className="follow">Follow</span> 
                <a className="instagram" target="_blank" href="https://www.instagram.com/tjmorrowmusic/" rel="noopener noreferrer">IG.</a> — 
                <a className="facebook" target="_blank" href="https://www.facebook.com/tjmorrowmusic/" rel="noopener noreferrer"> FB.</a> — 
                <a className="spotify" target="_blank" href="https://open.spotify.com/artist/0ghwhyyGE2QgojqNg9QqVF?si=zitnc1lpRcCjeQVJ5Vkx3g" rel="noopener noreferrer"> SP.</a>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="main" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
            <ContactForm />
          </div>
          <div className="footer-underlay">
            <div className="footer">
              <div className="copywrite">
                <span>© 2020 <a href="https://www.murraymacrecords.com" target="_blank" rel="noopener noreferrer">MurrayMac Records</a>. All Rights Reserved.</span>
                <span>
                  <a href="https://app.termly.io/document/privacy-policy/379b132b-4524-49d3-a460-27a2e7f5c731" target="_blank" rel="noopener noreferrer">Privacy Policy</a>  |  <a href="https://www.termsfeed.com/terms-conditions/dd12b0379f89cdd2456eb1728526ef28" target="_blank" rel="noopener noreferrer">Terms and Conditions</a></span>
                <span>Created by <a href="https://www.beauherrondev.com" target="_blank" rel="noopener noreferrer" className="portfolio">BHD</a></span>
              </div>
              <div className="vertical-text">
                <h2>TJ<span>MORROW</span>MUSIC</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
