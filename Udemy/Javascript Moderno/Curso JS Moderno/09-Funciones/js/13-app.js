// Métodos de propiedad (MÉTODOS) usando ARROW FUNCTIONS

const reproductor = {
  reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
  pausar: () => console.log('pausando...'),
  borrar: id => console.log(`Borrando canción con id ${id}`),
  crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),
  reproducirPlaylist: nombre => console.log(`Reproduciendo playlist ${nombre}`),
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Hardstyle');
reproductor.crearPlaylist('Alternativa');
reproductor.reproducirPlaylist('Alternativa');