# Design Doc

## Requirements

- Build an SDK for the Lord of the Rings API that is easy to consume and use focusing on `movie` and `quote` endpoint.
- Focus on code quality and readability.
- Well-documented file explaining the installation, use and test .
- Build the SDK to be easily extendable and maintain.
- Deploy the SDK to a public package manager repository in my case `npm`.

## Basic Principles

My language of choice is javacript, when building the SDK I follow some of the design guide in building an SDK with javascript which can find the link here, also design with the below points in mind.

- Simple configuration.
- Top level method accessability
- File splitting and Modularity
- Self Describing code

## Structure

The project entry point `index.js` at the root of the folder which has the main class with other endpoint script. The service have different folder which has different layer to the endpoint. Also utils folder has util helper for validation check and error exceptions.

```
#project root

├── ...
└── lib
  ├── main.js
  ├── movie.js
  ├── quote.js
├── Sample
  └── index.js
├── services
  ├── movie
    ├── ...
    └── getSingleMovie.js
  ├── quote
    ├── ...
    └── getSingleQuote.js
├── test
├── utils
├── design.md << you are here
├── index.js
├── package.json
├── package-lock.json
├── README.md
├── ....
```

## Testing

All test in this project use `Mocha`. The test currently covers test for all the neccessery endpoint. To run test use `npm run test `

## Future potential improvement.

- Query builder to make it more easier to pass query
- Test coverage should have more test to cover more unit and integration
- Better input validation and exception handling
