import { createContext } from 'react'
import { useBookReducer } from '../hooks/useBookReducer'
import { Book } from '../types'

interface CreateBookContext {
  books: Book[]
  myBooks: Book[]
  addBookToList: (book: Book) => void
  removeBookFromList: (ISBN: string) => void
}

export const MyBooksContext = createContext<CreateBookContext>({
  books: [],
  myBooks: [],
  addBookToList: function (): void {},
  removeBookFromList: function (): void {}
})

export function MyBooksProvider ({ children }: { children: React.ReactNode }) {
  const { state, addBookToList, removeBookFromList } = useBookReducer()

  return (
    <MyBooksContext.Provider value={{
      books: state.books,
      myBooks: state.myBooks,
      addBookToList,
      removeBookFromList
    }}>
      {children}
    </MyBooksContext.Provider>
  )
}
