import classes from './Header.module.css'

import { type Filters as FiltersType } from '../types'
import { AiOutlineSearch } from 'react-icons/ai'

import { useFilters } from '../hooks/useFilters'

export const Header = ({ searchBar = true }: { searchBar?: boolean }) => {
  const { filters, setFilters } = useFilters()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    if (query === ' ') return
    setFilters((prevState: FiltersType) => ({
      ...prevState,
      query
    }))
  }

  return (
    <header className={classes.header}>
      <h1>TU PRÓXIMO LIBRO</h1>
      {
        searchBar && <div className={classes.searchContainer}>
          <input name='searchBook'
            type="text"
            className={classes.searchInput}
            placeholder="Busca por título o autor..."
            value={filters.query}
            onChange={handleInputChange}
          />
        <AiOutlineSearch className={classes.searchIcon} />
      </div>
      }
    </header>
  )
}
