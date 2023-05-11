async function movieService(id, query, _lotr) {
  let payload = {};
  payload.method = 'GET';
  const { data } = await _lotr.request(`v2/movie/${id}/quote/${query}`, payload);
  return data;
}

module.exports = movieService;
