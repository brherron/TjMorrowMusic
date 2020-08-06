import React from 'react';

const Contact = () => {

  const primaryEmail = "beau@murraymacrecords.com"
  const secondaryEmail = "brherron@wisc.edu"
  const message = "Hey just wanted to reach out!"

  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="left-container">
          <div className="main" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="box"></div>
            <div className="image">
              <div className="socials" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                <span className="follow">Follow</span> 
                <a className="instagram" target="_blank" href="https://www.instagram.com/tjmorrowmusic/" rel="noopener noreferrer">IG.</a> — 
                <a className="facebook" target="_blank" href="https://www.facebook.com/tjmorrowmusic/" rel="noopener noreferrer"> FB.</a> — 
                <a className="spotify" target="_blank" href="https://open.spotify.com/artist/0ghwhyyGE2QgojqNg9QqVF?si=zitnc1lpRcCjeQVJ5Vkx3g" rel="noopener noreferrer"> SP.</a>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="main">
            
            <a>
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
