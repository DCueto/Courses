// Métodos de propiedad (MÉTODOS) usando ARROW FUNCTIONS

const data = {
  artistas: [
    {
      id: 1,
      artista: "Sub Zero Project",
      info: {
        origen: "Netherlands",
        miembros: ["Thomas Velderman", "Nigel Coppen"],
        generos: ["Hardstyle",],
        labels: ["Dirty Workz", "Scantraxx" ,"WE R Music", "Q-Dance Records", "Rave Culture", "Spinnin' Records",],
      },
      albums: [
        {
          id: 1,
          titulo: "Contagion",
          autor: "Sub Zero Project",
          canciones: [
            {nombre: "Patient Zero", tiempo: 248},
            {nombre: "Darkest Hour (The Clock)", tiempo: 242}, 
            {nombre: "The Contagion (feat. Christina Novelli)", tiempo: 209},
            {nombre: "Break the Game", tiempo: 251}, 
            {nombre: "Be My Guide", tiempo: 284}, 
            {nombre: "Call of the Sacred", tiempo: 208}, 
            {nombre: "Amen", tiempo: 217}, 
            {nombre: "The Source", tiempo: 221}, 
            {nombre: "All Night (feat. Bryant Powell", tiempo: 262},
            {nombre: "The Solution", tiempo: 202},
          ],
          fecha: "05/04/2019",
          año: 2019,
          genero: "Hardstyle",
          label: "Dirty Workz",
        },
      ],
      singles: [
      ],
    },
  ]
}

const biblioteca = {
  canciones: [
    {id: 1, titulo: "Perspective", autor: "Wasted Penguinz", album: "", release: "single"},
    {id: 2, titulo: ""},
  ],
  albums: [
    {
      id: 1,
      titulo: "Contagion",
      autor: "Sub Zero Project",
      canciones: [
        {nombre: "Patient Zero", tiempo: 248},
        {nombre: "Darkest Hour (The Clock)", tiempo: 242}, 
        {nombre: "The Contagion (feat. Christina Novelli)", tiempo: 209},
        {nombre: "Break the Game", tiempo: 251}, 
        {nombre: "Be My Guide", tiempo: 284}, 
        {nombre: "Call of the Sacred", tiempo: 208}, 
        {nombre: "Amen", tiempo: 217}, 
        {nombre: "The Source", tiempo: 221}, 
        {nombre: "All Night (feat. Bryant Powell", tiempo: 262},
        {nombre: "The Solution", tiempo: 202},
      ],
      fecha: "05/04/2019",
      año: 2019,
      genero: "Hardstyle",
      label: "Dirty Workz",
    },
  ],
  artistas: [
    {
      id: 1,
      artista: "Sub Zero Project",
    },
    {},
    {},
    
  ]
}

const reproductor = {
  cancion: '',
  reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
  pausar: () => console.log('pausando...'),
  borrar: id => console.log(`Borrando canción con id ${id}`),
  crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),
  reproducirPlaylist: nombre => console.log(`Reproduciendo playlist ${nombre}`),

  set nuevaCancion(cancion){
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },

  get obtenerCancion(){
    console.log(`${this.cancion}`);
  },
}

reproductor.nuevaCancion = 'Perspective - Wasted Penguinz';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Hardstyle');
reproductor.crearPlaylist('Alternativa');
reproductor.reproducirPlaylist('Alternativa');