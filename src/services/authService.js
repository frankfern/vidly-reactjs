import http from "./httpService";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

http.setJwt(getJwt());

export async function login(user) {
  const { data: jwt } = await http.post("http://127.0.0.1:3900/api/auth", {
    email: user.username,
    password: user.password,
  });
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}
export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};
