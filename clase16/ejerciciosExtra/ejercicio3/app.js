/* Encuentra la película más corta y analiza los títulos largos
Supón que tienes una lista de películas con su duración en minutos:
const movies = [
{ title: 'El Señor de los Anillos', duration: 200 },
{ title: 'Inception', duration: 148 },
{ title: 'Matrix', duration: 136 },
{ title: 'Toy Story', duration: 81 },
{ title: 'Coco', duration: 105 }
];
Queremos:
o Encontrar la película más corta en duración.
o De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10
caracteres.
o Crear una lista de los títulos largos en minúsculas.
o Imprime en la consola:
o El título de la película más corta.
o La lista de títulos largos en minúsculas. */

const movies = [
  { title: "El Señor de los Anillos", duration: 200 },
  { title: "Inception", duration: 148 },
  { title: "Matrix", duration: 136 },
  { title: "Toy Story", duration: 81 },
  { title: "Coco", duration: 105 },
];

let shortestMovie = movies.reduce(function (shortestMov, mov) {
  if (mov.duration < shortestMov.duration) {
    shortestMov = mov;
  }

  return shortestMov;
});

let longerMovies = movies.filter(function (movie) {
  return movie !== shortestMovie;
});

let longerTitleMovies = longerMovies.filter(function (movie) {
  return movie.title.length > 10;
});

let longerTitleMoviesList = longerTitleMovies.map((movie) => movie.title);

let longerTitleMoviesListToLowerCase = longerTitleMoviesList.map((movie) =>
  movie.toLowerCase()
);

console.log(shortestMovie.title);

console.log(longerTitleMoviesListToLowerCase);
