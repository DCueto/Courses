
// VARIABLES
const resultado = document.querySelector('#resultado');
const selectYear = document.querySelector('#year');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

console.log(maxYear, minYear);

// EVENTOS

document.addEventListener('DOMContentLoaded', ()=>{
  // Muestra los autos al cargar
  mostrarAutos();

  // Llena las opciones de años en el select #year
  llenarSelect();
});





// FUNCIONES

// Mostrar todos los coches en el div #resultado
function mostrarAutos(){
  autos.forEach(auto => {
    // destructoring de auto
    const {marca, modelo, year, precio, puertas, color, transmision} = auto;

    // creamos un párrafo por cada coche
    const autoHTML = document.createElement('p');

    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} puertas - Color ${color} - Transmisión ${transmision} : ${precio}€
    `;

    // Insertar en el HTML
    resultado.appendChild(autoHTML);
  })
}

// Genera los años del select
function llenarSelect(){
  
  // Recorremos el for de adelante hacia atrás para que el orden de los años sea descendente
  for (let i = maxYear; i >= minYear; i--){
    const yearHTML = document.createElement('option');
    yearHTML.value = i;
    yearHTML.textContent = i;

    selectYear.appendChild(yearHTML);
  }
}