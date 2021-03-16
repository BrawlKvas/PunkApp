async function request(...args) {
  const res = await fetch(...args)

  if (!res.ok) {
    throw new Error(`Bad request ${res.url}`)
  }

  return res.json()
}

export const PunkAPI = {
  baseUrl: 'https://api.punkapi.com/v2/',

  getBeer(beerName) {
    if (beerName)
      return request(`
        ${this.baseUrl}beers?page=1&per_page=80&beer_name=${beerName}
      `)
    else
      return request(`
        ${this.baseUrl}beers?page=1&per_page=80
      `)
  }
}