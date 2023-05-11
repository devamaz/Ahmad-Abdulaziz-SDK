async function quotesService(id, _lotr) {
  let payload = {};
  payload.method = 'GET';
  const { data } = await _lotr.request(`v2/quote/${id}`, payload);
  return data;
}

module.exports = quotesService;
