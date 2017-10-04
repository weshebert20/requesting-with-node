var movie = require("./movie.js");
// add three favorite movies into array
var threeFavoriteMovies = ["Jurassic Park", "Eternal Sunshine of the Spotless Mind", "The Fountain"];
threeFavoriteMovies.forEach(function(film){
	movie(film);
});