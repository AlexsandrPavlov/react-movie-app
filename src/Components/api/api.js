import {API_URL_BASE, TOKEN} from './config/api.config';
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
    const res = await fetch(`${API_URL_BASE}genre/movie/list?language=en`, options);
    if (!res.ok) {
      throw new Error(`Error code : ${res.status}`);
    }
    return await res.json();
  }
  async getMovieSearch(query, page) {
    const res = await fetch(`${API_URL}?query=${query}&include_adult=false&language=en-US&page=${page}`, options);
    if (!res.ok) {
      throw new Error(`Error code : ${res.status}`);
    }
    return await res.json();
  }
  async getTrendingMovies(page) {
    const res = await fetch(`${API_URL_BASE}movie/popular?language=en-US&page=${page}`, options);
    if (!res.ok) {
      throw new Error(`Error code : ${res.status}`);
    }
    return await res.json();
  }
  async getMovieRatedMovie(session) {
    const res = await fetch(
      `https://api.themoviedb.org/3/guest_session/${session}/rated/movies?language=en-US&sort_by=created_at.asc`,
      options
    );
    if (!res.ok) {
      throw new Error(`Error code : ${res.status}`);
    }
    return await res.json();
  }
  async getSessionId() {
    const res = await fetch(`${API_URL_BASE}authentication/guest_session/new`, options);
    if (!res.ok) {
      throw new Error(`Error code : ${res.status}`);
    }
    return await res.json();
  }
  async addRaitng(id, value) {
    const session = localStorage.getItem('guest_session_id');
    const optionsRate = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzUzNjJiMWQ0NjZiODg0MGQ0NTQ5MWJlNjRiZmEzZiIsIm5iZiI6MTc0MjczODA2Ny44MDksInN1YiI6IjY3ZTAxMjkzOTc4YmRhOGFlMjRkYTY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N9KoHH9pBgcDC7uM0M6M4qjgYYRyb-Ss8oBOxKK2ahg',
      },
      body: `{"value":${value}}`,
    };
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/rating?guest_session_id=${session}`, optionsRate);
    if (!res.ok) {
      throw new Error(`Error add raiting : ${res.status}`);
    }
  }
}
export default new MovieService();
