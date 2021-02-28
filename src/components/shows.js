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
            <div className="column right-container">
              <div className="main-img"></div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default Shows