import http from "./httpService";

export function registerUser(user) {
  return http.post("http://127.0.0.1:3900/api/users", {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
