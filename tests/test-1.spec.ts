import { test, expect } from '@playwright/test';

const LOCALHOST_URL = "http://localhost:5173/"

test('addBookToList and removeBookFromList', async ({ page }) => {
  // Navega a la página donde se encuentra tu aplicación
  await page.goto(LOCALHOST_URL) // Asegúrate de que esta sea la URL correcta

  // Realiza una serie de acciones para agregar un libro a la lista y luego eliminarlo
  await page.locator('a').filter({ hasText: 'Harry Potter y la piedra filosofalJ.K. RowlingFantasía223 pág.' }).click()
  await page.getByRole('button', { name: 'Agregar a Mi Lista' }).click()
  await page.getByRole('link', { name: '👈🏻 Volver atrás' }).click()

  // Verifica que el libro se haya agregado correctamente
  const localStorageValueAfterAdd = await page.evaluate(() => {
    return localStorage.getItem('library')
  });

  const { books, myBooks } = JSON.parse(localStorageValueAfterAdd!)

  // Obteniendo la cantidad de libros disponibles de la lista original
  let availableBooksCount = books.filter(book => book.available)

  expect(myBooks).toHaveLength(1);// -> 0 originalmente
  expect(availableBooksCount).toHaveLength(12) // -> 13 originalmente.

  // Ahora, realiza las acciones para eliminar el libro de la lista
  await page.locator('a').filter({ hasText: 'Harry Potter y la piedra filosofalJ.K. RowlingFantasía223 pág.' }).click()
  await page.getByRole('button', { name: 'Quitar de Mi Lista' }).click()
  await page.getByRole('link', { name: '👈🏻 Volver atrás' }).click()

  // Verifica que el libro se haya eliminado correctamente
  const localStorageValueAfterRemove = await page.evaluate(() => {
    return localStorage.getItem('library')
  });

  const { books: booksAfterRemove, myBooks: myBooksAfterRemove } = JSON.parse(localStorageValueAfterRemove!)

  // Obteniendo la cantidad de libros disponibles de la lista original
  availableBooksCount = booksAfterRemove.filter(book => book.available)

  expect(myBooksAfterRemove).toHaveLength(0)
  expect(availableBooksCount).toHaveLength(13)
});