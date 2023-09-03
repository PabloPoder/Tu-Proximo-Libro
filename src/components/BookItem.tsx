import classes from './BookItem.module.css'

import { type FC } from 'react'
import { type BookItem as BookItemType } from '../types'
import { Link } from 'react-router-dom'

export const BookItem: FC<BookItemType> = ({ link, authorName, cover, pages, title, genre, available = true }) => {
  const isAvailable = available ? 'undefined' : classes.isNotAvailable

  return (
    <Link to={link} className={`${classes.bookItem} ${isAvailable}`}>
      <article>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
        <h3>{authorName}</h3>
      <div className={classes.info}>
        <small>{genre}</small>
        <small>{pages} pág.</small>
      </div>
    </article>
    </ Link>
  )
}
