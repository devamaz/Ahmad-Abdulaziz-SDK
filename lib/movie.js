const HelperUtils = require('../utils/helper');
const allMovies = require('../services/movie/getAllMovies');
const movieQuotes = require('../services/movie/getMovieQuotes');
const singleMovie = require('../services/movie/getSingleMovie');

function Movies(lotr) {
  this.getAllMovies = function (query = '') {
    return allMovies(query, lotr);
  };

  this.getMovieQuotes = function (id, query = '') {
    HelperUtils.emptyCheck(id, 'Movie id is required');
    return movieQuotes(id, query, lotr);
  };

  this.getSingleMovie = function (id) {
    HelperUtils.emptyCheck(id, 'Movie id is required');
    return singleMovie(id, lotr);
  };
}
module.exports = Movies;
