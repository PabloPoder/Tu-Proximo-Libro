import classes from './Footer.module.css'

export const Footer = () => {
  return <footer className={classes.myFooter}>
    <h4>⚛️React: Prueba técnica</h4>
    <small>Pablo Poder</small> -
    <a href="https://pruebastecnicas.com/" target='_blank' rel="noreferrer"> pruebastecnicas.dev</a>
  </footer>
}
