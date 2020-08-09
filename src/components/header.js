import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../images/Logo_lg.png"
import '../styles/header.scss'

import useDocumentScrollThrottled from '../aux/useDocumentScrollThrottled'

function Header() {
  const [shouldHaveBackground, setShouldHaveBackground] = useState(false);
  const [shouldHideLogo, setShouldHideLogo] = useState(false);
  
  const MINIMUM_SCROLL = 10;
  const HERO_HEIGHT = 800;

  useDocumentScrollThrottled(callbackData => {
    const { currentScrollTop } = callbackData;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    const isHeroScrolled = currentScrollTop > HERO_HEIGHT;

    setTimeout(() => {
      setShouldHaveBackground(isMinimumScrolled);
      setShouldHideLogo(isHeroScrolled);
    }, 0);
  });

  const headerStyle = shouldHaveBackground ? 'has-background' : '';
  const logoVisible = shouldHideLogo ? 'hide-logo' : '';
  const titleVisible = shouldHideLogo ? '' : 'hide-title';
  
  return (
    <header className={headerStyle}>
      <div className="container">
        <div className={`inner-header ${headerStyle}`}>
          <div className="logo">
            <img alt="Tj Morrow Logo" className={logoVisible} src={logo}></img>
            <span className={titleVisible}>TJ MORROW</span>
          </div>
          <div className="navigation">
            <nav>
              {/* <AniLink cover direction="left" to="/home" duration={0.8} bg="black">Home</AniLink> */}
              <Link to="#music">Music</Link>
              <Link to="#shows">Shows</Link>
              <Link style={{marginRight: 0}} to="#contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
