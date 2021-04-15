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
