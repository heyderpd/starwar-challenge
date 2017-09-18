import React, { Component } from 'react'

import './stylesheets/style.css'
import Background from './components/background'
import PlanetCard from './components/planet-card'

import { getPages } from './commons/api'
import { setPlanets, randomPlanet } from './commons/planets'

class App extends Component {
  state = {
    warp: false,
    isInitialize: true,
    isLoading: false,
    hasError: false,
  }

  async componentDidMount () {
    const { response, error } = await getPages()
    if (response) {
      this.setState({ planets: setPlanets(response) })
    } else {
      this.setState({ hasError: true })
    }
    this.setState({ isInitialize: false })
  }

  async randomPlanet () {
    this.setState({ isLoading: true })
    this.warpToPlanet()
    this.setState({
      isLoading: false,
      planets: {
        count: this.state.planets.count,
        list: await randomPlanet(this.state.planets)
      }
    })
  }

  warpToPlanet () {
    if (!this.state.warp) {
      this.setState({ warp: true })
      setTimeout(() => this.setState({ warp: false }), 5000)
    }
  }

  render() {
    console.log('--state', this.state)

    return (
      <div className="App">
        <Background warp={this.state.warp} />
        <PlanetCard {...this.state} getPlanet={this.randomPlanet.bind(this)} />
      </div>
    );
  }
}

export default App
