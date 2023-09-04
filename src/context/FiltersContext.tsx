import { createContext, useState } from 'react'
import { type Filters as FiltersType } from '../types.d'

interface FiltersContextType {
  filters: FiltersType
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>
}
const initialFilters: FiltersType = {
  genre: 'all',
  maxPages: 1500,
  query: ''
}

export const FiltersContext = createContext<FiltersContextType>(
  {
    filters: initialFilters,
    setFilters: () => void {},
  }
)

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<FiltersType>(initialFilters)

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      { children }
    </FiltersContext.Provider>
  )
}
