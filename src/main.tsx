import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage.tsx'
import { BookDetail } from './components/BookDetail.tsx'
import { FiltersProvider } from './context/FiltersContext.tsx'
import { MyBooksProvider } from './context/MyBooksContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/:bookId',
        element: <BookDetail />
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <FiltersProvider>
    <MyBooksProvider>
      <RouterProvider router={router} />
    </MyBooksProvider>
  </FiltersProvider>
)
