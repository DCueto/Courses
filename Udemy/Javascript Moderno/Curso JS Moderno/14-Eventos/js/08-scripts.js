// Evitar la propagación con contenido creado...

// Esta técnica es para cuando el código es generado.
// Es muy común generar el contenido de esta forma cuando consumes datos de una API

// CREAMOS LA FUNCIÓN PARA EL EVENTO
// el problema es que si queremos pasarle un parámetro a la función, al tener que añadir los paréntesis
// en el elemento.onclick, se ejecutará al momento en vez de cuando le demos click.
function nuevaFuncion(id){
  console.log('desde nueva función', id);
}

// la solución sería aplicarle una función anónima al onlick del elemento con la función
// nuevaFuncion() dentro de esa función anónima.


const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// APLICAMOS UNA FUNCIÓN ANÓNIMA AL EVENTO ONCLICK CON LA FUNCIÓN nuevaFuncion()
// BIEN -> Se ejecuta correctamente a la hora de disparar el evento
parrafo2.onclick = function(){
  nuevaFuncion(1);
}

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// APLICAMOS UNA FUNCIÓN AL EVENTO ONCLICK
// MAL -> Se ejecuta solo al cargarse el documento, no con el evento.
parrafo3.onclick = nuevaFuncion(1);

// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info