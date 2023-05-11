async function movieService(query, _lotr) {
  let payload = {};
  payload.method = 'GET';
  const { data } = await _lotr.request(`v2/movie/${query}`, payload);
  return data;
}

module.exports = movieService;
