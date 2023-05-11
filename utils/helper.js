const { BadRequest } = require('./errorException');
let HelperUtils = {};

HelperUtils.emptyCheck = function (value, message) {
  message = message || 'Some error occured';

  if (!value || typeof value == 'undefined') {
    throw BadRequest(message);
  }
};

HelperUtils.initDefaultValue = function (value, default_value) {
  return value || default_value;
};

module.exports = HelperUtils;
