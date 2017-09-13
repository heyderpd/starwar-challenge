import React, { Component } from 'react'

import './stylesheets/style.css'
import Background from './components/background'
import PlanetCard from './components/planet-card'
import Loading from './components/loading'

import { getPages, getPlanets } from './commons/api'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loading />
        <PlanetCard />
        <Background />
      </div>
    );
  }
}

export default App
