import { useContext, useMemo } from 'react'
import { MyBooksContext } from '../context/MyBooksContext'
import { type Book } from '../types'

export const useBooks = () => {
  const { books, myBooks, addBookToList, removeBookFromList } = useContext(MyBooksContext)

  const bookByISBN = (ISBN: string | undefined) => {
    if (ISBN === undefined) return
    return books.find((book: Book) => book.ISBN === ISBN)
  }

  const { availableBooksCount, myListCount } = useMemo(() => {
    const availableCount = books.filter((book: Book) => book.available).length
    const listCount = myBooks.length

    return { availableBooksCount: availableCount, myListCount: listCount }
  }, [books, myBooks])

  return {
    books,
    bookByISBN,
    myBooks,
    addBookToList,
    removeBookFromList,
    availableBooksCount,
    myListCount
  }
}
