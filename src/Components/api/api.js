import {TOKEN} from './config/api.config';
import {API_URL} from './config/api.config';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TOKEN} `,
  },
};
class MovieService {
  async getGenreMovie() {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
    if (!res.ok) {
      throw new Error(`Error code : ${res.status}`);
    }
    return await res.json();
  }
  async getMovieSearch(query = 'The Way', page = 1) {
    const res = await fetch(`${API_URL}?query=${query}}&include_adult=false&language=en-US&page=${page}`, options);
    if (!res.ok) {
      throw new Error(`Error code : ${res.status}`);
    }
    return await res.json();
  }
  async getMovieById(id) {
    const res = await fetch(`${API_URL}/movie/${id}`, options);
    if (!res.ok) {
      throw new Error(`Error code : ${res.status}`);
    }
    return await res.json();
  }
}
export default new MovieService();
