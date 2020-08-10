import React, { useState } from 'react';
import { useScroll } from '../aux/useScroll.js'
import { useSwipeable } from 'react-swipeable'

import '../styles/hero.scss'

const Hero = () => {
  const [ leftAlbumActive, setLeftAlbumActive] = useState(false);
  const  scrollY = useScroll().scrollY;

  function clickAlbum(e) {
    setLeftAlbumActive(!leftAlbumActive);
  }

  const swipeHandlers = useSwipeable ({
    onSwipedLeft: () => {
      setLeftAlbumActive(false)
    },
    onSwipedRight: () =>  {
      setLeftAlbumActive(true)
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })

  return (
    <div id="music" className="hero">
      <div className="container">
        <div className="left-container">
          <div className="main">
            <div className="main-img" style={{backgroundPositionY: (scrollY/40+70)+'%'}}></div>
            <div className="bio-text">
              Tj Morrow first picked up a guitar while in college and he hasn't looked back since. The midwest-based artist has performed in many bands throughout his 10 years of playing music. In 2019 he released his debut EP as a solo country artist.
            </div>
         </div>
         <div className="main-text" style={{bottom: (scrollY/30+40)+'%'}}>
         </div>
        </div>
        <div className="right-container">
          <div className="main" style={{left: !leftAlbumActive ? "-5%" : "-20%"}}>
            <div {...swipeHandlers} className="album-frame">
              <div className="album-slider" style={{left: !leftAlbumActive ? "-80%" : "0%"}}>
                <div role="button" tabIndex={0} className={leftAlbumActive ? "album1 active-album" : "album1 inactive-album"} onClick={clickAlbum} onKeyDown={clickAlbum} ></div>
                <div role="button" tabIndex={0} className={leftAlbumActive ? "album2 inactive-album" : "album2 active-album"} onClick={clickAlbum} onKeyDown={clickAlbum}></div>
              </div>
              <div className="album-text">
                <p className={!leftAlbumActive ? "hidden-text" : "visible-text"}>Live and Learn is the 2019 debut EP for country artist Tj Morrow.</p>
                <p className={leftAlbumActive ? "hidden-text" : "visible-text"}>Released in August 2020, Dive Bar is the latest single from singer/songwriter Tj Morrow.</p>
                <br />
                <br />
                <a className="listen-now" target="_blank" rel="noopener noreferrer" href={!leftAlbumActive ? "http://hyperurl.co/LittleDiveBar" : "http://hyperurl.co/LiveAndLearn"}>GET IT HERE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-landscape">
        <div className="rotate"></div>
      </div>
    </div>
  )
}

export default Hero

