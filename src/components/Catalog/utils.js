export const sortCatalog = (catalog, typeSort) => {
  switch (typeSort) {
    case 1:
      return [...catalog].sort((a, b) => a.abv - b.abv)

    case 2:
      return [...catalog].sort((a, b) => b.abv - a.abv)

    case 3:
      return [...catalog].sort((a, b) => a.ibu - b.ibu)

    case 4:
      return [...catalog].sort((a, b) => b.ibu - a.ibu)

    default:
      return [...catalog]
  }
}
