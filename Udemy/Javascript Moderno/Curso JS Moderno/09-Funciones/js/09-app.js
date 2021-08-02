// Métodos de propiedad (MÉTODOS)
// Función dentro de un objeto


const reproductor = {
  reproducir: function(id){
    console.log(`Reproduciendo canción con el id ${id}`);
  },
  pausar: function(id){
    console.log('pausando...');
  },
  borrar: function(id){
    console.log(`Borrando canción con id ${id}`);
  },
  crearPlaylist: function(nombre){
    console.log(`Creando la playlist de ${nombre}`);
  },
  reproducirPlaylist: function(nombre){
    console.log(`Reproduciendo playlist ${nombre}`);
  }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Hardstyle');
reproductor.crearPlaylist('Alternativa');
reproductor.reproducirPlaylist('Alternativa');