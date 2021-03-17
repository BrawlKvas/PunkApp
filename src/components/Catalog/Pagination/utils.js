export const getPages = (countPage, currentPage) => {
  // -1 = '...'
  if (countPage < 6) {
    return new Array(countPage).fill(0).map((_, i) => i + 1)
  } else if (currentPage < 5) {
    return [1, 2, 3, 4, 5, -1, countPage]
  } else if (currentPage > countPage - 4) {
    return [1, -1, countPage - 4, countPage - 3, countPage - 2, countPage - 1, countPage]
  } else {
    return [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, countPage]
  }
}
