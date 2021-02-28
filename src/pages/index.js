import React, { Component } from "react"
import '../styles/styles.scss' 

//Import Components
import Header from '../components/header.js'
import Hero from '../components/hero.js'
import Shows from '../components/shows.js'
import Contact from '../components/contact.js'
import SEO from '../components/seo.js'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

class IndexPage extends Component {

  render() {
    return (
      <div>
        <SEO title="TJ MORROW" />
        <Header />
        <Hero />
        <Shows />
        <Contact />
      </div>
    )
  }
} 

export default IndexPage