const HelperUtils = require('../utils/helper');
const axios = require('axios');

let Main = function (access_key) {
  HelperUtils.emptyCheck(access_key, 'Access Key required');

  let base_url = 'https://the-one-api.dev';

  this.getAccessKey = function () {
    return access_key;
  };

  this.getBaseUrl = function () {
    return base_url;
  };

  this.request = function (path, payload) {
    let requestOptions = {};

    requestOptions.url = `${this.getBaseUrl()}/${path}`;
    requestOptions.method = payload.method;
    requestOptions.data = HelperUtils.initDefaultValue(payload.body, {});
    requestOptions.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getAccessKey()}`,
    };
    return this._makeRequest(requestOptions);
  };
};

Main.prototype = {
  _makeRequest: function (requestOptions) {
    return axios(requestOptions).catch((err) => {
      let message = typeof err.response !== 'undefined' ? err.response.data.message : err.message;
      console.warn('error', message);
    });
  },
};

module.exports = Main;
