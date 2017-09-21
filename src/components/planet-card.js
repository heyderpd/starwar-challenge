import React from 'react'

import Loading from './loading'
import Button from './button'

import { toScale } from '../commons/utils'

const PlanetCard = ({
  initializing,
  isLoading,
  getPlanet,
  planets
}) => {

  if (initializing) {
    return (<Loading big={true} />)
  }
  const {
    name,
    population,
    climate,
    terrain,
    filmsList
  } = planets.selectedCard

  return (
    <div className="planetCard">
      <div className="planetCard-title">
        {name}
      </div>

      <div className="planetCard-info">
        <div>
          <span>population:</span>
          <span>{toScale(population)}</span>
        </div>

        <div>
          <span>climate:</span>
          <span>{climate}</span>
        </div>

        <div>
          <span>terrain:</span>
          <span>{terrain}</span>
        </div>

        {filmsList && <div>
          <span>films:</span>
          <span>{filmsList}</span>
        </div>}
      </div>

      <Button disabled={isLoading} onClick={getPlanet}>
        next
      </Button>
    </div>
  )
}
export default PlanetCard
