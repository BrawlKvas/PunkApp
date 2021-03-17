const BASE_URL = 'https://api.punkapi.com/v2/'

async function request(...args) {
  const res = await fetch(...args)

  if (!res.ok) {
    throw new Error(`Bad request ${res.url}`)
  }

  return res.json()
}

export const requestBeer = (beerName) => {
  if (beerName)
    return request(`
      ${BASE_URL}beers?page=1&per_page=80&beer_name=${beerName}
    `)
  else
    return request(`
      ${BASE_URL}beers?page=1&per_page=80
    `)
}
