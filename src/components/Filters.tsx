import classes from './Filters.module.css'

import { type Filters as FiltersType } from '../types.d'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.ts'
import { GENRES } from '../utils/constants.ts'
import { useBooks } from '../hooks/useBooks.ts'
import { FC}from "react"

interface Props {
  setShowCase: (value: boolean) => void
  selectedView: boolean
}

export const Filters: FC<Props> = ({ setShowCase, selectedView } ) => {
  const { filters, setFilters } = useFilters()
  const { availableBooksCount, myListCount } = useBooks()

  const categoryId = useId()
  const pagesId = useId()

  const handleChangeMaxPages = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState: FiltersType) => ({
      ...prevState,
      maxPages: parseInt(event.target.value)
    }))
  }

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = event.target.value
    setFilters((prevState: FiltersType) => ({
      ...prevState,
      genre
    }))
  }

  return (
    <div className={classes.filtersAndAreas}>
      <section className={classes.bookAreas}>
        <button
          onClick={() => setShowCase(true)} className={selectedView === true ? classes.viewSelected : 'undefined'}>
          Libros disponibles <small><sup>({availableBooksCount})</sup></small>
        </button>|
        <button onClick={() => setShowCase(false)} className={selectedView === true ? 'undefined' : classes.viewSelected}>
          Mi Lista <small><sup>({myListCount})</sup></small>
        </button>
      </section>
      <section className={classes.filters}>
        <div className={classes.categoryFilter}>
          <label htmlFor={categoryId}>Categoría:</label>
          <select id={categoryId} onChange={handleCategoryChange} value={filters.genre}
          >
            <option value="all">Todas</option>
            {GENRES.map((genre) => <option value={genre} key={genre}>{ genre }</option>)}
          </select>
        </div>
        <div className={classes.pageFilter}>
          <label htmlFor={pagesId}>Páginas:</label>
          <input type="range"
            id={pagesId}
            min={0}
            max={1500}
            value={filters.maxPages}
            step={50}
            onChange={handleChangeMaxPages}
          /> <span>0 - {filters.maxPages}</span>
        </div>
      </section>
    </div>
  )
}
