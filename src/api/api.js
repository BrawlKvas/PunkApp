async function request(...args) {
  const res = await fetch(...args)

  if (!res.ok) {
    throw new Error(`Bad request ${res.url}`)
  }

  return res.json()
}

export const PunkAPI = {
  baseUrl: 'https://api.punkapi.com/v2/',

  getBeers(page, pageSize) {
    return request(`
      ${this.baseUrl}beers?page=${page}&per_page=${pageSize}
    `)
  }
}