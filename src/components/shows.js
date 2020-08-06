import React, { Component } from 'react';
import EventsList from './eventsList.js'

import AOS from 'aos'
import "aos/dist/aos.css"

class Shows extends Component {
  componentDidMount() {
    AOS.init();
    AOS.refresh();
  }

  render () {
    return (
      <div id="shows" className="shows">
        <div className="container">
          <div className="left-container">
            <EventsList />
          </div>
            <div className="right-container">
              <div className="main-img"></div>
            </div>
        </div>
      </div>
    )
  }
}


export default Shows