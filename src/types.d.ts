// data.json
interface Library {
  library: LibraryEntry[]
}

// library property
interface LibraryEntry {
  book: Book
}

interface Book {
  title: string
  pages: number
  genre: Genre
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
  available?: boolean
}

interface Author {
  name: string
  otherBooks: string[]
}

export interface Author {
  name: string
  otherBooks: string[]
}

type Genre = 'Zombies' | 'Ciencia ficción' | 'Terror' | 'Fantasía' | string

export interface BookItem {
  cover: string
  title: string
  authorName: Author.name
  link: string
  pages: number
  genre: Genre
  available?: boolean
}

interface Filters {
  genre: Genre | 'all'
  maxPages: number
  query: string
}

type ReducerActionType = AddToListAction | RemoveFromListAction

interface AddToListAction {
  type: BOOKS_ACTIONS.ADD_BOOK_TO_LIST
  payload: Book
}

interface RemoveFromListAction {
  type: BOOKS_ACTIONS.REMOVE_BOOK_FROM_LIST
  payload: { ISBN: string }
}

interface BooksContextType {
  books: Book[]
  myBooks: Book[]
}
