
// VARIABLES

  const buscador = document.querySelector('#buscador');
  const selects = document.querySelectorAll('#buscador select');

  // Contenedor de resultados
  const resultado = document.querySelector('#resultado');

  // Años del select
  const maxYear = new Date().getFullYear();
  const minYear = maxYear - 10;

  // Selects del buscador
  const selectMarca = document.querySelector('#marca');
  const selectYear = document.querySelector('#year');
  const selectMinimo = document.querySelector('#minimo');
  const selectMaximo = document.querySelector('#maximo');
  const selectPuertas = document.querySelector('#puertas');
  const selectTransmision = document.querySelector('#transmision');
  const selectColor = document.querySelector('#color');

  // Botón imprimir datos
  const btnDatos = document.querySelector('#datosBusqueda');

  // Generar objeto con la búsqueda
  const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
  };


// EVENTOS

// Al cargar el DOM
document.addEventListener('DOMContentLoaded', ()=>{
  // Muestra los autos al cargar
  mostrarAutos();

  // Llena las opciones de años en el select #year
  llenarSelect();
});

  // Selects de búsqueda
  // Con el evento 'change', se ejecuta al cambiar de opción en un select
  selectMarca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
  });
  selectYear.addEventListener('change', e => datosBusqueda.year = e.target.value);
  selectMinimo.addEventListener('change', e => datosBusqueda.minimo = e.target.value);
  selectMaximo.addEventListener('change', e => datosBusqueda.maximo = e.target.value);
  selectPuertas.addEventListener('change', e => datosBusqueda.puertas = e.target.value);
  selectTransmision.addEventListener('change', e => datosBusqueda.transmision = e.target.value);
  selectColor.addEventListener('change', e => datosBusqueda.color = e.target.value);

// Imprimir datosBusqueda con botón Datos
btnDatos.addEventListener('click', e => {
  e.preventDefault();
  console.log(datosBusqueda);

  limpiarHTML();
});

// Imprimir datos de búsqueda
// selects.forEach( select => {
//   select.addEventListener('change', filtrarAuto);
// });

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


// Función que filtra en base a la búsqueda

function filtrarAuto(){
  const resultado = autos.filter(filtrarMarca);
  console.log(resultado);
}

// Filtro select marca
function filtrarMarca(auto){
  const {marca} = datosBusqueda;
  if(marca){
    return auto.marca === marca;
  }
  return auto;
}

// Imprime los coches con el filtro de los datosBusqueda
// function imprimirBusqueda(e){
//   limpiarHTML();
//   console.log(e);
//   const id = e.target.id;
//   const value = e.target.value;
//   if(id == 'marca'){
//     const busqueda = autos.filter(auto => auto.marca == value);
//     console.log(busqueda);
//     busquedaHTML(busqueda);
//   }
// }

// function busquedaHTML(busqueda){
//   busqueda.forEach(auto => {
//     // destructoring de auto
//     const {marca, modelo, year, precio, puertas, color, transmision} = auto;

//     // creamos un párrafo por cada coche
//     const autoHTML = document.createElement('p');

//     autoHTML.textContent = `
//       ${marca} ${modelo} - ${year} - ${puertas} puertas - Color ${color} - Transmisión ${transmision} : ${precio}€
//     `;

//     // Insertar en el HTML
//     resultado.appendChild(autoHTML);
//   });
// }

// Limpiar la sección #resultado
function limpiarHTML(){
  while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
  }
}