'use strict';
const main = require('./lib/main');
const movie = require('./lib/movie');
const quote = require('./lib/quote');

const LOTR = function (accessKey) {
  const lotr = new main(accessKey);

  this.Movie = new movie(lotr);
  this.Quote = new quote(lotr);
};

module.exports = LOTR;
