
// VARIABLES
const resultado = document.querySelector('#resultado');



// EVENTOS

document.addEventListener('DOMContentLoaded', ()=>{
  mostrarAutos();
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