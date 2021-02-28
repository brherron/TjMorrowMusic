import React, { Component } from 'react';
import EventsList from './eventsList.js'

class Shows extends Component {

  render () {
    return (
      <div id="shows" className="shows">
        <div className="container">
          <div className="columns is-centered">
            <div className="column left-container">
              <EventsList />
            </div>
            <div className="column right-container"
                  data-sal="slide-up"
                  data-sal-delay="000"
                  data-sal-easing="ease-out-cubic" data-sal-duration="900">
              <div className="main-img"></div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default Shows