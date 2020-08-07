import React, { useState } from 'react';
import { useScroll } from '../aux/useScroll.js'

const Hero = () => {
  const [ leftAlbumActive, setLeftAlbumActive] = useState(false);
  const  scrollY = useScroll().scrollY;

  function clickAlbum(e) {
    setLeftAlbumActive(!leftAlbumActive);
    e.target.parentNode.style.left = leftAlbumActive ? "-80%" : "0%";
    e.target.parentNode.parentNode.parentNode.style.left = leftAlbumActive ? "-5%" : "-20%";
  }

  return (
    <div id="music" className="hero">
      <div className="container">
        <div className="left-container">
          <div className="main">
            <div className="main-img" style={{backgroundPositionY: (scrollY/40+70)+'%'}}></div>
            <div className="bio-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. 
            </div>
         </div>
         <div className="main-text" style={{bottom: (scrollY/30+40)+'%'}}>
         </div>
        </div>
        <div className="right-container">
          <div className="main">
            <div className="album-frame">
              <div className="album-slider">
                <div role="button" tabIndex={0} className={leftAlbumActive ? "album1 active-album" : "album1 inactive-album"} onClick={clickAlbum} onKeyDown={clickAlbum} ></div>
                <div role="button" tabIndex={0} className={leftAlbumActive ? "album2 inactive-album" : "album2 active-album"} onClick={clickAlbum} onKeyDown={clickAlbum}></div>
              </div>
              <div className="album-text">
                <p className={!leftAlbumActive ? "hidden-text" : "visible-text"}>Live and Learn is the 2019 debut album for Tj Morrow.</p>
                <p className={leftAlbumActive ? "hidden-text" : "visible-text"}>Dive Bar is the latest single from singer/songwriter Tj Morrow.</p>
                <br />
                <br />
                <a className="listen-now" target="_blank" rel="noopener noreferrer" href="http://hyperurl.co/LiveAndLearn">GET IT HERE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
