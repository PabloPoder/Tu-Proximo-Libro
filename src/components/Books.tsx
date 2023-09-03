import classes from './Books.module.css'
import { type Book } from '../types'

import { BookItem } from './BookItem'

export const Books = ({ books }: { books: Book[] }) => {
  return (
    <>
      {books.length === 0 ? <WithoutBooks /> : < WithBooks books={books} />}
    </>
  )
}

const WithBooks = ({ books }: { books: Book[] }) => {
  return (
    <ul className={classes.booksGrid}>
      {books.map(book => {
        return (
          <li key={book.ISBN}>
            <BookItem
              link={book.ISBN}
              title={book.title}
              authorName={book.author.name}
              cover={book.cover}
              pages={book.pages}
              genre={book.genre}
              available={book.available}
            />
          </li>
        )
      }
      )}
    </ul>
  )
}

const WithoutBooks = () => {
  return (
    <>
      <h4>No hay libros con esas características ☹️</h4>
      <p>Prueba cambiando los filtros!</p>
    </>
  )
}
