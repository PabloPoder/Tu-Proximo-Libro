import './App.css'
import { Outlet, useLocation } from 'react-router-dom'

import { Books } from './components/Books.tsx'
import { Header } from './components/Header.tsx'
import { Filters } from './components/Filters.tsx'

import { useBooks } from './hooks/useBooks.ts'
import { useFilters } from './hooks/useFilters.ts'
import { Footer } from './components/Footer.tsx'
import { useState } from 'react'

function App () {
  const location = useLocation()
  const { books, myBooks } = useBooks()
  const { filterBooks } = useFilters()

  // Este estado define que set de libros se mostraran.
  // true -> Libros disponibles | false -> Mi Lista
  const [allBooksView, setAllBooksView] = useState(true)

  const handleChangeShowCase = (value: boolean) => {
    setAllBooksView(value)
  }

  const mainPage = location.pathname === '/'

  const filteredBooks = filterBooks(allBooksView ? books : myBooks)

  return (
    <>
      <Header searchBar={mainPage} />
      {mainPage && <Filters setShowCase={handleChangeShowCase} selectedView={allBooksView} />}
      {mainPage && <Books books={filteredBooks} />}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
