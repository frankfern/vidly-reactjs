import http from "./httpService";

export function getMovies() {
  return http.get("http://127.0.0.1:3900/api/movies");
}
export function deleteMovie(obj) {
  return http.delete("http://127.0.0.1:3900/api/movies", obj);
}
export function getMovie(id) {
  return http.get(`http://127.0.0.1:3900/api/movies/${id}`);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(`http://127.0.0.1:3900/api/movies/${movie._id}`, body);
  }
  return http.post("http://127.0.0.1:3900/api/movies", movie);
}
