import { useContext } from 'react'
import { type Book } from '../types.d'

import { FiltersContext } from '../context/FiltersContext.tsx'

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterBooks = (books: Book[]) => {
    return books.filter(book => {
      const category = filters.genre === 'all' || book.genre === filters.genre
      const pages = book.pages <= filters.maxPages
      const query = book.title.toLowerCase().includes(filters.query.toLowerCase()) || book.author.name.toLowerCase().includes(filters.query.toLowerCase())
      return category && pages && query
    })
  }

  return { filters, filterBooks, setFilters }
}
