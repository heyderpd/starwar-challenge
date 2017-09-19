import React, { Component } from 'react'

import './stylesheets/style.css'
import Background from './components/background'
import PlanetCard from './components/planet-card'

import { getPages } from './commons/api'
import { setPlanets, randomPlanet } from './commons/planets'

class App extends Component {
  state = {
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

    this.setState({
      planets: {
        count: this.state.planets.count,
        list: await randomPlanet(this.state.planets)
      },
      isLoading: false,
    })
  }

  render() {
    return (
      <div className="App">
        <Background warp={this.state.isLoading} />
        <PlanetCard {...this.state} getPlanet={this.randomPlanet.bind(this)} />
      </div>
    );
  }
}

export default App
