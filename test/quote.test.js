const main = require('../lib/main');
const quotes = require('../lib/quote');


let mocha = require('mocha');
let chai = require('chai');
let expect = chai.expect;
let chaiAsPromised = require('chai-as-promised');

let dotenv = require('dotenv').config();

const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(chaiAsPromised);
chai.use(sinonChai);

describe('Quote Test', () => {
  const accessKey = process.env.ACCESS_KEY;
  const mainlib = new main(accessKey);

  let quotesInstance;

  beforeEach(() => {
    quotesInstance = new quotes(mainlib);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return all quotes', async function () {
    this.timeout(10000);

    const getQuoteStub = sinon.stub(quotesInstance, 'getAllQuote').resolves({
      body: {
        docs: [
          {
            _id: '5cd96e05de30eff6ebcce7e9',
            dialog: 'Deagol!',
            movie: '5cd95395de30eff6ebccde5d',
            character: '5cd99d4bde30eff6ebccfe9e',
            id: '5cd96e05de30eff6ebcce7e9',
          },
          {
            _id: '5cd96e05de30eff6ebcce7ea',
            dialog: 'Deagol!',
            movie: '5cd95395de30eff6ebccde5d',
            character: '5cd99d4bde30eff6ebccfe9e',
            id: '5cd96e05de30eff6ebcce7ea',
          },
          {
            _id: '5cd96e05de30eff6ebcce7eb',
            dialog: 'Deagol!',
            movie: '5cd95395de30eff6ebccde5d',
            character: '5cd99d4bde30eff6ebccfe9e',
            id: '5cd96e05de30eff6ebcce7eb',
          },
        ],
        total: 2384,
        limit: 1000,
        offset: 0,
        page: 1,
        pages: 795,
      },
    });

    let resp = await quotesInstance.getAllQuote();

    // success case
    expect(getQuoteStub).to.have.been.calledOnce;
    expect(getQuoteStub).to.have.been.calledOnceWith();

    expect(resp.body.docs[0]).to.have.property('id');
    expect(resp.body.docs[0]).to.have.property('movie');
  });

  it('should return only two quotes', async function () {
    this.timeout(10000);

    const getQuoteStub = sinon.stub(quotesInstance, 'getAllQuote').resolves({
      body: {
        docs: [
          {
            _id: '5cd96e05de30eff6ebcce7e9',
            dialog: 'Deagol!',
            movie: '5cd95395de30eff6ebccde5d',
            character: '5cd99d4bde30eff6ebccfe9e',
            id: '5cd96e05de30eff6ebcce7e9',
          },
          {
            _id: '5cd96e05de30eff6ebcce7ea',
            dialog: 'Deagol!',
            movie: '5cd95395de30eff6ebccde5d',
            character: '5cd99d4bde30eff6ebccfe9e',
            id: '5cd96e05de30eff6ebcce7ea',
          },
        ],
        total: 2384,
        limit: 2,
        offset: 0,
        page: 1,
        pages: 795,
      },
    });

    let limit = '?limit=3'

    let resp = await quotesInstance.getAllQuote(limit);

    // success case
    expect(getQuoteStub).to.have.been.calledOnce;
    expect(getQuoteStub).to.have.been.calledOnceWith(limit);

    expect(resp.body).to.have.property('limit');
    expect(resp.body.limit).to.eq(2);
    expect(resp.body.docs[0]).to.have.property('dialog');
  });

  it('should return a single quote ', async function () {
    this.timeout(10000);

    const getQuoteStub = sinon.stub(quotesInstance, 'getSingleQuote').resolves({
      body: {
        docs: [
          {
            _id: '5cd96e05de30eff6ebcce84c',
            dialog: "I didn't think it would end this way.",
            movie: '5cd95395de30eff6ebccde5d',
            character: '5cd99d4bde30eff6ebccfe2e',
            id: '5cd96e05de30eff6ebcce84c',
          },
        ],
        total: 1,
        limit: 1000,
        offset: 0,
        page: 1,
        pages: 1,
      },
    });

    let id ='5cd96e05de30eff6ebcce84c',


    resp = await quotesInstance.getSingleQuote(id);

    // success case
    expect(getQuoteStub).to.have.been.calledOnce;
    expect(getQuoteStub).to.have.been.calledOnceWith(id);

    expect(resp.body.docs[0]).to.have.property('id');
    expect(resp.body.docs[0]).to.have.property('movie');
    expect(resp.body.docs[0].id).to.eq(id);
    expect(resp.body.docs[0].dialog).to.eq("I didn't think it would end this way.");
  });
});
