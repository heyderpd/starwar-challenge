import React from 'react'

import Loading from './loading'
import Button from './button'

const PlanetCard = ({
  initializing,
  isLoading,
  getPlanet,
  planets
}) => {

  if (initializing) {
    return (<Loading big={true} />)
  }

  const { selectedCard } = planets
  console.log(planets, selectedCard)
  const {
    name,
    population,
    climate,
    terrain
  } = selectedCard

  return (
    <div className="planetCard">
      <div>
        <span>name:</span>
        <span>{name}</span>
      </div>

      <div>
        <span>population:</span>
        <span>{population}</span>
      </div>

      <div>
        <span>terrain:</span>
        <span>{terrain}</span>
      </div>

      <Button disabled={isLoading} onClick={getPlanet}>
        next
      </Button>
    </div>
  )
}
export default PlanetCard
