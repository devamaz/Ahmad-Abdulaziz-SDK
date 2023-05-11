async function movieService(id, _lotr) {
  let payload = {};
  payload.method = 'GET';
  const { data } = await _lotr.request(`v2/movie/${id}/`, payload);
  return data;
}

module.exports = movieService;
