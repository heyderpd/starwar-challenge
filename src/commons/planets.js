import { getPlanet } from './api'
import { getIdFromUrl } from './utils'

const randomizedIds = []

const randomValue = limit => Math.min(limit, Math.floor(Math.random() *limit +1))

const randomId = limit => {
  let id = randomValue(limit)
  if (randomizedIds.indexOf(id) >= 0) {
    id = randomValue(limit)
  }
  randomizedIds.push(id)
  return id
}

const getPlanetId = ({ url }) => getIdFromUrl(url)

const getFilmsList = ({ films }) => films.map(url => getIdFromUrl(url))

const formatPlanet = planet => ({
  [getPlanetId(planet)]: {
    ...planet,
    filmsList: getFilmsList(planet)
  }
})

const formatAllPlanets = results => {
  return results
    .reduce((acc, planet) => ({
      ...acc,
      ...formatPlanet(planet)
    }), {})
}

export const setPlanets = ({ count, results }) => {
  const planets = formatAllPlanets(results)
  const initialCount = Object.keys(planets).length
  const id = randomId(initialCount)

  return {
    count,
    list: planets,
    selectedCard: planets[id]
  }
}

export const randomPlanet = async ({ count, list }) => {
  const id = randomId(count)
  const selectedCard = list[id]
  if (selectedCard) {
    return { selectedCard }

  } else {
    const { response } = await getPlanet(id)
    return {
      newPlanet: { id: response },
      selectedCard: response
    }
  }
}
