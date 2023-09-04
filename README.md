# Tu Próximo Libro - _En desarrollo_

## Introducción 👋🏻

***Tu próximo libro*** es una aplicación web que permite a los usuarios crear listas de lectura de libros de una editorial ficticia. La aplicación cuenta con un catálogo de libros con toda su información. Los usuarios pueden crear listas de lectura personalizadas filtrando los libros por género, autor, cantidad de páginas, etc.

## Objetivo del proyecto 🎯

El objetivo de esta aplicación es la de poner en práctica mis habilidades en el desarrollo web de realizando pruebas tecnicas reales provistas por la página [Pruebas técnicas de Programación](https://pruebastecnicas.com) de [@midudev](https://github.com/midudev/midudev)

## Público objetivo 👥

***Tu próximo libro*** está dirigido a personas interesadas en la lectura que quieren tener su propia lista de libros de forma digital. La aplicación es una herramienta útil para organizar y priorizar los libros que quieres leer.

## Funcionalidades ⚡

- [x] 1. **Visualización de Libros Disponibles**
- [x] 2. **Creación de Lista de Lectura**
- [x] 3. **Filtrado de Libros por Género y otros parametros**
- [x] 4. **Sincronización de Estado**
- [x] 5. **Persistencia de Datos**
- [ ] 6. **Sincronización entre pestañas**
- [x] 7. **Despliegue**
- [x] 8. **Test**

## Visitar pagina 💻
<a href="https://tuproximolibro.netlify.app/" target="_blank">Tu Próximo Libro - Netlify</a>


## Capturas del sitio 📷

![image](https://github.com/PabloPoder/Tu-Proximo-Libro/assets/50326883/2321ccd0-e55f-41ef-ae07-f53930859b2f)

![image](https://github.com/PabloPoder/Tu-Proximo-Libro/assets/50326883/e84d9fcb-ef8d-4f85-8f0d-7e75c813ea8f)

## Instalación ⚙️
1. Clona el repositorio de GitHub en tu computadora:
```
git clone https://github.com/PabloPoder/Tu-Proximo-Libro.git
```

2. Navega hasta la carpeta del proyecto:
```
cd Tu-Proximo-Libro
```

3. Instala las dependencias del proyecto:
```
npm install
```

4. Inicia la aplicación:
```
npm start
```

## Tests 🧪

El objetivo de esta prueba es verificar que los usuarios pueden agregar y eliminar libros de su lista correctamente.

Para ejecutar el test puedes usar los siguientes comandos:

```
npx playwright test
```
o

```
npm test
```

Ten en cuenta que puedes cambiar la ruta de la pagina `LOCALHOST_URL` en [tests/test-1.spec.ts]
