import CatalogItem from './CatalogItem'
import { useMemo, useState } from 'react'
import Pagination from './Pagination'
import { sortCatalog } from './utils' 

import styles from './Catalog.module.css'

const Catalog = ({ catalog, cart, pageSize, currentPage, addToCart }) => {
  const [typeSort, setTypeSort] = useState(0)

  const sortedCatalog = useMemo(
    () => sortCatalog(catalog, typeSort),
    [catalog, typeSort]
  )

  const portionCatalog = sortedCatalog.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  return (
    <div className={styles.catalog}>

      <div className={styles.top}>
        <select onChange={({ target }) => setTypeSort(+target.value)}>
          <option value='0'>None</option>
          <option value='1'>ABV: Low to High</option>
          <option value='2'>ABV: High to Low</option>
          <option value='3'>IBU: Low to High</option>
          <option value='4'>IBU: High to Low</option>
        </select>

        <Pagination />
      </div>

      <div className={styles.list}>
        {
          portionCatalog.map(item => (
            <CatalogItem
              product={item}
              addToCart={addToCart}
              inCart={!!cart.find(elem => elem.id === item.id)}
              key={item.id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Catalog
