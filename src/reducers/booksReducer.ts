import data from '../mocks/data.json' assert { type: 'json' }
import { type BooksContextType, type Book, type AddToListAction, type RemoveFromListAction } from '../types'
import { BOOKS_ACTIONS } from '../utils/constants'

const localStorage = window.localStorage.getItem('library')

export const initialState = localStorage !== null
  ? JSON.parse(localStorage)
  : {
      books: data.library.map(item => ({
        ...item.book,
        available: true
      })),
      myBooks: []
    }

// Actualizando local storage
export const updateLocalStorage = (state: BooksContextType) => {
  window.localStorage.setItem('library', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [BOOKS_ACTIONS.ADD_TO_LIST]: (state: BooksContextType, action: AddToListAction) => {
    const book = action.payload
    const { books, myBooks } = state

    const bookInList = myBooks.findIndex((item: Book) => item.ISBN === book.ISBN)

    if (bookInList === -1) {
      const myNewBooks = [
        ...myBooks,
        { ...book, available: true }
      ]

      // Cambiando el atributo de disponible de lista de libros.
      const newAllBooks = books.map((item: Book) => {
        if (item.ISBN === book.ISBN) {
          item.available = false
        }

        return item
      })

      const newState = { books: newAllBooks, myBooks: myNewBooks }
      updateLocalStorage(newState)

      return newState
    }

    return state
  },
  [BOOKS_ACTIONS.REMOVE_FROM_LIST]: (state: BooksContextType, action: RemoveFromListAction) => {
    const { books, myBooks } = state
    const { ISBN } = action.payload

    const bookToRemove = myBooks.find((book: Book) => book.ISBN === ISBN)

    if (bookToRemove != null) {
      const myNewBooks = (myBooks.filter((book: Book) => book.ISBN !== ISBN))

      const newAllBooks = books.map((item: Book) => {
        if (item.ISBN === ISBN) {
          item.available = true
        }
        return item
      })

      const newState = { books: newAllBooks, myBooks: myNewBooks }
      updateLocalStorage(newState)
      return newState
    }

    return state
  }
}

export const booksReducer = (state: BooksContextType, action: any) => {
  const { type: actionType } = action

  const updateState = UPDATE_STATE_BY_ACTION[actionType]

  return updateState(state, action)
}
