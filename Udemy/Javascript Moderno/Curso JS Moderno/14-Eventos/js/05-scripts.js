// Eventos que suceden con el scroll

// scroll
window.addEventListener('scroll', e => {

  // window.scrollY nos permite saber el pixel que hemos realizado de scroll
  const scrollPx = window.scrollY;
  // console.log(scrollPx);

  const premium = document.querySelector('.premium');
  // .getBoundingClientRect() nos permite saber a que distancia se encuentra el scroll del elemento
  // muy útil para ejecutar animaciones y aplicar estilos a la hora de llegar a un elemento HTML
  const ubicacion = premium.getBoundingClientRect();
  // console.log(ubicacion);
  const btnPremium = document.querySelector('.premium .boton');

  if(ubicacion.top < 760 && ubicacion.top > -ubicacion.height){
    console.log('Te encuentras en la sección Premium');
  } else {
    console.log('No estás en la sección');
  }

  // Cambiar el color del botón una vez estamos centrados en la sección Premium
  if(ubicacion.top < 100 && ubicacion.top > -100){
    btnPremium.classList.add('scroll-focus');
  } else {
    btnPremium.classList.remove('scroll-focus');
  }
})