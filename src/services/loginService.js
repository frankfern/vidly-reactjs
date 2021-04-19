import http from "./httpService";

export function loginUser(user) {
  return http.post("http://127.0.0.1:3900/api/auth", {
    email: user.username,
    password: user.password,
  });
}
