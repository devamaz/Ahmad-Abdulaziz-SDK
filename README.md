# Ahmad-Abdulaziz-SDK

## Introduction

Repository for Lotr API SDK implementation

Available features include:

- Listing all movies.
- Listing all quotes for one specific movie.
- Get specific movie
- Listing all quote.
- Get specific quote

### Basic endpoints

This only covers below endpoints

- Movies
- Quotes

## Requirements

- LOTR API [the-one-api](https://the-one-api.dev/sign-up) API Key.
- Node

## Installation

To install the library, run this comman in your Node terminal:

```sh
npm install ahmad-lotr-sdk
```

## Initialization

```javascript
const LOTR = require('ahmad-lotr-sdk');
const lotr = new LOTR(process.env.ACCESS_KEY);
```

## Movies

### `Get all Movies`

This describes how to get all movies

```javascript
const LOTR = require('ahmad-lotr-sdk');
const lotr = new LOTR(process.env.ACCESS_KEY);

const getMovie = async () => {
  try {
    const rep = await lotr.Movie.getAllMovie();
    return rep;
  } catch (error) {
    console.log(error);
  }
};
getMovie();
```

### `Fetch Single Movie quote`

This describes how to get single movie.

```javascript
const LOTR = require('ahmad-lotr-sdk');
const lotr = new LOTR(process.env.ACCESS_KEY);

const getAMovie = async () => {
  const movieId = '5cd95395de30eff6ebccde5d';
  try {
    const rep = await lotr.Movie.getSingleMovie(movieId);
    return rep;
  } catch (error) {
    console.log(error);
  }
};
getAMovie();
```

### `Get Quote from a Movie`

This describes how to get just three quote from a movie

```javascript
const LOTR = require('ahmad-lotr-sdk');
const lotr = new LOTR(process.env.ACCESS_KEY);

const getMovieQuote = async () => {
  const movieId = '5cd95395de30eff6ebccde5d';
  const query = '?limit=3'
  try {
    const rep = await lotr.Movie.getMovieQuotes(movieId, query);
    return rep;
  } catch (error) {
    console.log(error);
  }
};
getMovieQuote();
```

You can also check the sample folder for more example

## Testing

All of the libraries tests are run on Mocha. They can be run by running the test command in your terminal.

```sh
npm run test
```

## License

By contributing to this library, you agree that your contributions will be licensed under its [MIT license](/LICENSE).
