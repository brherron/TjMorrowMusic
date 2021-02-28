import React from "react"
import { Link } from "gatsby"
import logo from "../images/Logo_lg.png"

function Header() {
  
  return (
    <div className="navbar">
      <div className="container">
        <div className='inner-header'>
          <div className="logo">
            <img alt="Tj Morrow Logo" src={logo}></img>
          </div>
          <div className="navigation">
            <nav>
              <Link to="#music">Music</Link>
              <Link to="#shows">Shows</Link>
              <Link to="#contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
