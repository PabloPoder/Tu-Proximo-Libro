import { type Book } from '../types.d'
import { booksReducer, initialState } from '../reducers/booksReducer'
import { useReducer } from 'react'
import { BOOKS_ACTIONS } from '../utils/constants'

export function useBookReducer () {
  const [state, dispatch] = useReducer(booksReducer, initialState)

  const addBookToList = (book: Book) => {
    dispatch({
      type: BOOKS_ACTIONS.ADD_TO_LIST,
      payload: book
    })
  }

  const removeBookFromList = (ISBN: string) => {
    dispatch({
      type: BOOKS_ACTIONS.REMOVE_FROM_LIST,
      payload: { ISBN }
    })
  }

  return { addBookToList, removeBookFromList, state, dispatch }
}
