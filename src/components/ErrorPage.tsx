import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
  <>
    <h1>404 Not Found</h1>
    <img src="https://imgs.search.brave.com/FoeNZ_7KIn1GSL-Vb0jQ7SkXyumctvSGwQWycmfPpW8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/REhrSWR5MGEtVWtB/QUFBQy9sb2FkaW5n/LWNhdC5naWY.gif" alt="Cat thinking gif" />
    <p>Ups, esa pagina no existe.</p>
    <Link to="/">👈🏻Volver a pagina principal</Link>
  </>
  )
}
