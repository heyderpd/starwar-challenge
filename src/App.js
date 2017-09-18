import React, { Component } from 'react'

import './stylesheets/style.css'
import Background from './components/background'
import PlanetCard from './components/planet-card'

import { getPages, getPlanets } from './commons/api'

class App extends Component {
  state = {
    isInitialize: true,
    isLoading: true
  }

  async componentDidMount () {
    const { response, error } = await getPages()
    this.setState({
      isInitialize: false,
      pages: response
    })
  }

  render() {
    console.log('--state', this.state)

    return (
      <div className="App">
        <Background />
        <PlanetCard {...this.state} />
      </div>
    );
  }
}

export default App
