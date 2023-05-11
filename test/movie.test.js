const main = require('../lib/main');
const movie = require('../lib/movie');

let mocha = require('mocha');
let chai = require('chai');
let expect = chai.expect;
let chaiAsPromised = require('chai-as-promised');

let dotenv = require('dotenv').config();

const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(chaiAsPromised);
chai.use(sinonChai);

describe('Movie Test', () => {
  const accessKey = process.env.ACCESS_KEY;
  const mainlib = new main(accessKey);

  let moviesInstance;

  beforeEach(() => {
    moviesInstance = new movie(mainlib);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return all movie', async function () {
    this.timeout(10000);

    const getQuoteStub = sinon.stub(moviesInstance, 'getAllMovies').resolves({
      body: {
        docs: [
          {
            _id: '5cd95395de30eff6ebccde56',
            name: 'The Lord of the Rings Series',
            runtimeInMinutes: 558,
            budgetInMillions: 281,
            boxOfficeRevenueInMillions: 2917,
            academyAwardNominations: 30,
            academyAwardWins: 17,
            rottenTomatoesScore: 94,
          },
          {
            _id: '5cd95395de30eff6ebccde57',
            name: 'The Hobbit Series',
            runtimeInMinutes: 462,
            budgetInMillions: 675,
            boxOfficeRevenueInMillions: 2932,
            academyAwardNominations: 7,
            academyAwardWins: 1,
            rottenTomatoesScore: 66.33333333,
          },
          {
            _id: '5cd95395de30eff6ebccde58',
            name: 'The Unexpected Journey',
            runtimeInMinutes: 169,
            budgetInMillions: 200,
            boxOfficeRevenueInMillions: 1021,
            academyAwardNominations: 3,
            academyAwardWins: 1,
            rottenTomatoesScore: 64,
          },
          {
            _id: '5cd95395de30eff6ebccde59',
            name: 'The Desolation of Smaug',
            runtimeInMinutes: 161,
            budgetInMillions: 217,
            boxOfficeRevenueInMillions: 958.4,
            academyAwardNominations: 3,
            academyAwardWins: 0,
            rottenTomatoesScore: 75,
          },
        ],
        total: 8,
        limit: 1000,
        offset: 0,
        page: 1,
        pages: 1,
      },
    });

    let resp = await moviesInstance.getAllMovies();

    // success case
    expect(getQuoteStub).to.have.been.calledOnce;
    expect(getQuoteStub).to.have.been.calledOnceWith();

    expect(resp.body.docs[0]).to.have.property('name');
    expect(resp.body.docs[0]).to.have.property('runtimeInMinutes');
  });

  it('should return only two movie', async function () {
    this.timeout(10000);

    const getQuoteStub = sinon.stub(moviesInstance, 'getMovieQuotes').resolves({
      body: {
        docs: [
          {
            _id: '5cd96e05de30eff6ebcced61',
            dialog: 'Who is she? This woman you sing of?',
            movie: '5cd95395de30eff6ebccde5c',
            character: '5cd99d4bde30eff6ebccfc15',
            id: '5cd96e05de30eff6ebcced61',
          },
          {
            _id: '5cd96e05de30eff6ebcced62',
            dialog: "Tis the Lady of L'thien. The Elf Maiden who gave her love to Beren ... a mortal.",
            movie: '5cd95395de30eff6ebccde5c',
            character: '5cd99d4bde30eff6ebccfbe6',
            id: '5cd96e05de30eff6ebcced62',
          },
          {
            _id: '5cd96e05de30eff6ebcced64',
            dialog: "What are they eating when they can't get hobbit?",
            movie: '5cd95395de30eff6ebccde5c',
            character: '5cd99d4bde30eff6ebccfc7c',
            id: '5cd96e05de30eff6ebcced64',
          },
        ],
        total: 503,
        limit: 1000,
        offset: 0,
        page: 1,
        pages: 1,
      },
    });

    let modvieId = '5cd95395de30eff6ebccde5c';

    let resp = await moviesInstance.getMovieQuotes(modvieId);

    // success case
    expect(getQuoteStub).to.have.been.calledOnce;
    expect(getQuoteStub).to.have.been.calledOnceWith(modvieId);

    expect(resp.body.docs[0].movie).to.eq(modvieId);
    expect(resp.body.docs[0]).to.have.property('dialog');
  });

  it('should return a single quote ', async function () {
    this.timeout(10000);

    const getQuoteStub = sinon.stub(moviesInstance, 'getSingleMovie').resolves({
      body: {
        docs: [
          {
            _id: '5cd95395de30eff6ebccde57',
            name: 'The Hobbit Series',
            runtimeInMinutes: 462,
            budgetInMillions: 675,
            boxOfficeRevenueInMillions: 2932,
            academyAwardNominations: 7,
            academyAwardWins: 1,
            rottenTomatoesScore: 66.33333333,
          },
        ],
        total: 1,
        limit: 1000,
        offset: 0,
        page: 1,
        pages: 1,
      },
    });

    let id = '5cd95395de30eff6ebccde57',
      resp = await moviesInstance.getSingleMovie(id);

    // success case
    expect(getQuoteStub).to.have.been.calledOnce;
    expect(getQuoteStub).to.have.been.calledOnceWith(id);

    expect(resp.body.docs[0]).to.have.property('_id');
    expect(resp.body.docs[0]).to.have.property('name');
    expect(resp.body.docs[0]._id).to.eq(id);
    expect(resp.body.docs[0].runtimeInMinutes).to.eq(462);
  });
});
