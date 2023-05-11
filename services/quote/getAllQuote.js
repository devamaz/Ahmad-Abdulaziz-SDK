async function quotesService(query, _lotr) {
  let payload = {};
  payload.method = 'GET';
  const { data } = await _lotr.request(`v2/quote/${query}`, payload);
  return data;
}

module.exports = quotesService;
