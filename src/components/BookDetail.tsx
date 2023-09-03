import classes from './BookDetail.module.css'
import { type Book } from '../types.d'

import { useBooks } from '../hooks/useBooks'
import { Link, useParams } from 'react-router-dom'

const BookDetails = ({ book }: { book: Book }) => {
  const { addBookToList, removeBookFromList, myBooks } = useBooks()

  const isBookInList = myBooks.find((item: Book) => item.ISBN === book.ISBN)

  const handleAddBook = () => {
    addBookToList(book)
  }

  const handleRemoveBook = () => {
    removeBookFromList(book.ISBN)
  }

  return (
  <section className={classes.bookDetails}>
    <img src={book.cover} alt={book.title} />
    <article className={classes.bookInfo}>
      <h2>{book.title}</h2>
      <h3>{book.author.name}</h3>
      <blockquote>{book.genre}</blockquote>
      <p>{book.year}</p>
      <em className={classes.sinopsis}>{book.synopsis}</em>
        <p>{book.pages} páginas</p>
      {book.author.otherBooks.length > 0 && <p className={classes.otherBooks}>
        Otros libros de {book.author.name}: {book.author.otherBooks.map(otherBook => <li key={otherBook}>{otherBook}</li>)}
      </p>}
        <div>
          {
            isBookInList === undefined
              ? <button className={classes.addButton} onClick={handleAddBook}>Agregar a Mi Lista</button>
              : <button className={classes.removeButton} onClick={handleRemoveBook}>Quitar de Mi Lista</button>
          }
      </div>
    </article>
    <div>
    </div>
  </section>
  )
}

const NotFound = () => {
  return (
    <section className={ classes.notFound}>
      <img src="https://imgs.search.brave.com/XGDYAFcaus7N-yeIB8OocXk7OuxjhSgCUtxzjhRlP7U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QyLzFm/L2I0L2QyMWZiNDlk/Njk0MmY0OTgyZDc0/NWMzOTQxZDUyZWE2/LmdpZg.gif" alt="gato leyendo" />
      <h2>Perdón, no hemos encontrado ese libro.</h2>
    </section>
  )
}

export const BookDetail = () => {
  const params = useParams()
  const { bookByISBN } = useBooks()
  const { bookId } = params

  // recuperar libro por id
  const book = bookByISBN(bookId)

  return (
    <>
      <div className={classes.goBackSection}>
        <Link to={'/'} className={classes.goBack}>👈🏻 Volver atrás</Link>
      </div>
      {book === undefined ? <NotFound /> : <BookDetails book={book} />}
  </>
  )
}
