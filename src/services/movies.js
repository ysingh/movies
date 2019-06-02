const axios = require('axios')
const { REACT_APP_BASE_MOVIE_URL, REACT_APP_TMDB_API_KEY } = process.env

module.exports.movieInfo = async (page) => axios.get(`${REACT_APP_BASE_MOVIE_URL}/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&sort_by=popularity.desc&include_adult=true&include_video=true&page=${page}`)
