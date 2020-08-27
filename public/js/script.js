const filas = document.querySelector('.contenedor-imagenes')
const peliculas = document.querySelectorAll('.pelicula')

const flechaIzquierda = document.getElementById('flecha-izquierda')
const flechaDerecha = document.getElementById('flecha-derecha')

flechaDerecha.addEventListener('click', () => {
    filas.scrollLeft += filas.offsetWidth
})
flechaIzquierda.addEventListener('click', () => {
    filas.scrollLeft -= filas.offsetWidth
})

const numPaginas = Math.ceil(peliculas.length / 5)
for(let i=0; i < numPaginas; i++){
    const indicador = document.createElement('button')
    document.querySelector('.indicadores').appendChild(indicador)
}