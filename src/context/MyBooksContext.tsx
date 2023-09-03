import { createContext } from 'react'
import { useBookReducer } from '../hooks/useBookReducer'

export const MyBooksContext = createContext({})

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
