
// VARIABLES

  const buscador = document.querySelector('#buscador');

  // Query array con todos los elementos select en #buscador
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
  mostrarAutos(autos);

  // Llena las opciones de años en el select #year
  llenarSelect();
});

  // Selects de búsqueda
  // Con el evento 'change', se ejecuta al cambiar de opción en un select
  selectMarca.addEventListener('change', e => datosBusqueda.marca = e.target.value);
  // usamos parseInt() para convertir el valor de string a number y poder usar el comparador estricto en el .filter()
  selectYear.addEventListener('change', e => datosBusqueda.year = parseInt(e.target.value));
  selectMinimo.addEventListener('change', e => datosBusqueda.minimo = parseInt(e.target.value));
  selectMaximo.addEventListener('change', e => datosBusqueda.maximo = parseInt(e.target.value));
  selectPuertas.addEventListener('change', e => datosBusqueda.puertas = parseInt(e.target.value));
  selectTransmision.addEventListener('change', e => datosBusqueda.transmision = e.target.value);
  selectColor.addEventListener('change', e => datosBusqueda.color = e.target.value);


// Imprimir datos de búsqueda
// Hacemos un forEach a todos los elementos select pasándole el eventListener que queremos en todos
// los elementos.
selects.forEach( select => {
  select.addEventListener('change', filtrarAuto);
});

// FUNCIONES

// Mostrar los autos en el div #resultado
function mostrarAutos(busqueda){
  limpiarHTML();
  busqueda.forEach(auto => {
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
  // podemos concatenar .filter() para ir obteniendo resultados en base a diferentes filtros en una
  // misma búsqueda.
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo)
    .filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
  console.log(resultado);

  // Verificar si hay algún resultado con la búsqueda
  if (resultado.length > 0){
    mostrarAutos(resultado);
  } else{
    // Si no hay ningún resultado:
    console.log('No hay autos con estas características');
    sinResultado();
  }


  // Filtro marca
  function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
      return auto.marca === marca;
    }
    // en caso de que no haya contenido en datosBusqueda por no rellenar el select, retorna
    // el array de autos entero para que se pueda seguir filtrando en los otros filtros
    return auto;
  }

  // Filtro year
  function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
      return auto.year === year;
    }
    return auto;
  }

  // Filtro precio mínimo
  function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if(minimo){
      return auto.precio >= minimo;
    }
    return auto;
  }

  // Filtro precio máximo
  function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){
      return auto.precio <= maximo;
    }
    return auto;
  }

  // Filtro puertas
  function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
      return auto.puertas === puertas;
    }
    return auto;
  }

  // Filtro transmisión
  function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
      return auto.transmision === transmision;
    }
    return auto;
  }

  // Filtro color
  function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
      return auto.color === color;
    }
    return auto;
  }
}

function sinResultado(){
  limpiarHTML();
  const noResultado = document.createElement('div');
  noResultado.classList.add('alerta', 'error');
  noResultado.textContent = `NO HAY RESULTADOS`;

  // Insertar en el HTML
  resultado.appendChild(noResultado);
}



// Limpiar la sección #resultado
function limpiarHTML(){
  while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
  }
}