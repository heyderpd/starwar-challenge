import React, { Component } from 'react'

import './stylesheets/style.css'
import Background from './components/background'
import PlanetCard from './components/planet-card'

import { getPages } from './commons/api'
import { setPlanets, randomPlanet } from './commons/planets'

class App extends Component {
  state = {
    initializing: true,
    isLoading: false,
    hasError: false,
    planets: {}
  }

  async componentDidMount () {
    const { response } = await getPages()
    if (response) {
      this.setState({ planets: setPlanets(response) })
    } else {
      this.setState({ hasError: true })
    }
    this.setState({ initializing: false })
  }

  async randomPlanet () {
    this.setState({ isLoading: true })

    const { newPlanet, selectedCard } = await randomPlanet(this.state.planets)
    const list = newPlanet
      ? {
          ...this.state.planets.list,
          ...newPlanet
        }
      : this.state.planets.list
    this.setState({
      planets: {
        ...this.state.planets,
        list,
        selectedCard
      }
    })

    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 700)
  }

  render() {
    return (
      <div className="App">
        <Background warp={this.state.isLoading} />
        <PlanetCard
          initializing={this.state.initializing}
          isLoading={this.state.isLoading}
          getPlanet={this.randomPlanet.bind(this)}
          selectedCard={this.state.planets.selectedCard}
        />
      </div>
    );
  }
}

export default App
