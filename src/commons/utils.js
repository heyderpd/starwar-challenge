const scale = ['', 'thousand', 'million', 'billion', 'trillion']

export const toScale = num => {
  if (num === 'unknown') {
    return num
  }

  const mult = Math.floor((num.length -1) /3)
  const sc = scale[Math.max(0, mult)]
  const n = Math.floor(num /Math.pow(1000, mult))

  return `${n} ${sc}`
}

export const getIdFromUrl = url => {
  // eslint-disable-next-line
  const [ all, id ] = /^.+?(\d+)\/?$/.exec(String(url))
  // eslint-enabled-next-line
  return id
}

export const forceResizeEvent = () => {
  window.dispatchEvent(new Event('resize'))
}

const romanNumerals = ['', 'i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x']

export const formatFilms = films => films
  .map(getIdFromUrl)
  .map(Number)
  .sort()
  .map(n => romanNumerals[Math.max(0, n)])
  .filter(Boolean)
  .join(', ')
