import { getPlanet } from './api'

const getPlanetId = ({ url }) => {
  const [ all, id ] = /^.+?(\d+)\/?$/.exec(String(url))
  return id
}

const formatPlanet = planet => ({ [getPlanetId(planet)]: planet })

const formatAllPlanets = results => {
  return results
    .reduce((acc, planet) => ({
      ...acc,
      ...formatPlanet(planet)
    }), {})
}

export const setPlanets = ({ count, results }) => {
  return {
    count,
    list: formatAllPlanets(results)
  }
}

export const randomPlanet = async ({ count, list }) => {
  const id = Math.min(count, Math.floor(Math.random() *count +1))
  const planet = list[id]
  if (planet) {
    return {
      ...list,
      [id]: planet
    }
  } else {
    const { response } = await getPlanet(id)
    return {
      ...list,
      [id]: response
    }
  }
}
