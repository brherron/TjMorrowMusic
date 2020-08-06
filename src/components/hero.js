import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useScroll } from '../aux/useScroll.js'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      mainText: file(relativePath: { eq: "TJ_MORROW@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      mainImg: file(relativePath: { eq: "mainImg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [ leftAlbumActive, setLeftAlbumActive] = useState(false);
  const  scrollY = useScroll().scrollY;

  function clickAlbum(e) {
    setLeftAlbumActive(!leftAlbumActive);
    e.target.parentNode.style.left = leftAlbumActive ? "-80%" : "0%";
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
          <Img fluid={data.mainText.childImageSharp.fluid} />
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
                <span>
                  {leftAlbumActive ? "Live and Learn is the 2019 debut album for Tj Morrow." : "Dive Bar is the latest single from singer/songwriter Tj Morrow."}
                </span>
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
