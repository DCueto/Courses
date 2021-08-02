window.onload = function(){
  
  const carrito = [];

  pullData();

  function pullData(){
    let product_name = prompt("Introduce el nómbre del producto:");
    let product_price = prompt("Introduce el valor del producto:");

    const product = {
      name: product_name,
      price: product_price,
    }

    // for (let i = 0; carrito.length < i++; i++)

    carrito[carrito.length++] = product;

    console.log(carrito);

    let stop_p = confirm("¿Quieres seguir añadiendo productos?");
    validateConfirm(stop_p);
  }

  function validateConfirm(confirm){
    // Si es true (d'acord)
    if (confirm == true){
      pullData();
    
    // Si es false (cancelar)
    } else{
      console.log("No se añadirán más productos");
    }
  }

};