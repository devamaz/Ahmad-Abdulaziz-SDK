const HelperUtils = require('../utils/helper');
const allQuotes = require('../services/quote/getAllQuote');
const singleQuote = require('../services/quote/getSingleQuote');

function Quote(lotr) {
  this.getAllQuote = function (query = '') {
    return allQuotes(query, lotr);
  };

  this.getSingleQuote = function (id) {
    HelperUtils.emptyCheck(id, 'Quote id is required');
    return singleQuote(id, lotr);
  };
}
module.exports = Quote;
