const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;

const MOVIE_BASE_URL = `${API_URL}/movie/`;
// FOR TRAILERS, CREDITS AND DETAILS

const UPCOMING_BASE_URL = `${MOVIE_BASE_URL}upcoming?api_key=${API_KEY}&language=en-US&page=`;

const SEARCH_BASE_URL = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=`;

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w1280";

export { MOVIE_BASE_URL, UPCOMING_BASE_URL, SEARCH_BASE_URL, IMAGE_BASE_URL };
