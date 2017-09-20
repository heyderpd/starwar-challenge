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
  }

  async componentDidMount () {
    const { response, error } = await getPages()
    if (response) {
      this.setState({ planets: setPlanets(response) })
    } else {
      this.setState({ hasError: true })
    }
    this.setState({ initializing: false })
  }

  async randomPlanet () {
    this.setState({ isLoading: true })

    const { newPlanet, id, selectedCard } = await randomPlanet(this.state.planets)
    const list = newPlanet
      ? {
          ...this.state.planets.list,
          [id]: selectedCard
        }
      : this.state.planets.list

    this.setState({
      planets: {
        ...this.state.planets,
        list,
        selectedCard
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
