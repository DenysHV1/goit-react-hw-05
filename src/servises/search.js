import axios from "axios";
const KEY = 'ee3e9c5f4ba904ebcf317d566e2eec32';
const BASE_URL = 'https://api.themoviedb.org';

export const searchTrendMovies = async () => {
	const { data } = await axios.get(
	  `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
	);
  
	return data;
  };

  export const fetchMovieByName = async query => {
	const { data } = await axios.get(
	  `${BASE_URL}/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
	);
  
	return data;
  };
  
  export const fetchMovieById = async movieId => {
	const { data } = await axios.get(
	  `${BASE_URL}/3/movie/${movieId}?api_key=${KEY}&language=en-US`
	);
  
	return data;
  };
  
  export const fetchMovieCast = async movieId => {
	const { data } = await axios.get(
	  `${BASE_URL}/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
	);
  
	return data;
  };
  
  export const fetchMovieReviews = async movieId => {
	const { data } = await axios.get(
	  `${BASE_URL}/3/movie/${movieId}}/reviews?api_key=${KEY}&language=en-US&page=1`
	);
  
	return data;
  };

