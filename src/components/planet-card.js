import React from 'react'

import Loading from './loading'
import Button from './button'

const PlanetCard = ({
  isInitialize,
  isLoading,
  getPlanet
}) => {

  if (isInitialize) {
    return (<Loading big={true} />)
  }

  return (
    <div className="planetCard">
      <div>
        <span>Nome:</span>
        <span>Planeta</span>
      </div>

      <div>
        <span>Clima:</span>
        <span>Frio</span>
      </div>

      <div>
        <span>Filme:</span>
        <span>1, 2, 3</span>
      </div>

      <Button disabled={isLoading} onClick={getPlanet}>
        next
      </Button>
    </div>
  )
}
export default PlanetCard
