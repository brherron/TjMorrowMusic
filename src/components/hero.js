import React, { useState } from 'react';
import { useScroll } from '../aux/useScroll.js'
import { useSwipeable } from 'react-swipeable'

import '../styles/hero.scss'

const Hero = () => {
  const [ leftAlbumActive, setLeftAlbumActive ] = useState(false)
  const [ leftAmount, setLeftAmount ] = useState(-80)
  const [ touchDelta, setTouchDelta ] = useState(0)
  const  scrollY = useScroll().scrollY;

  function clickAlbum(e) {
    setLeftAlbumActive(!leftAlbumActive);
  }

  const swipeHandlers = useSwipeable ({
    onSwiping: (e) => {
      var delta = leftAmount - (e.deltaX - touchDelta)
      if ( -95 < delta && delta < 15) {
        setLeftAmount(delta)
        if (leftAlbumActive) {
          if (-15 < e.deltaX && e.deltaX < 95) {
            setTouchDelta(e.deltaX)
          }
        } else {
          if (15 > e.deltaX && e.deltaX > -95) {
            setTouchDelta(e.deltaX)
          }
        }
      }
    },
    onSwipedLeft: () => {
      setLeftAlbumActive(false)
      setLeftAmount(-80)
    },
    onSwipedRight: () =>  {
      setLeftAlbumActive(true)
      setLeftAmount(0)
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
            <div className="album-frame">
              <div className="album-slider" {...swipeHandlers} style={{left: leftAmount+"%"}}>
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

