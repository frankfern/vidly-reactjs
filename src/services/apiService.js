// import http from "./httpService";
// import config from "../config/config.json";

// export class ApiService {
//   baseUrl = config.api;
//   endpoint = "";
//   getHeaders = () => {
//     return {
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//       },
//     };
//   };

//   getCompleteUrl = () => {
//     return `${this.baseUrl}/${this.endpoint}`;
//   };
//   static create = async (data) => {
//     return await http.post(this.getCompleteUrl, data);
//   };
//   list = async () => {
//     return await http.get(this.getCompleteUrl, this.getHeaders);
//   };
//   detail = async (id) => {
//     return await http.get(this.getCompleteUrl + "/" + id);
//   };
//   delete = async (id) => {
//     return await http.delete(this.getCompleteUrl + "/" + id);
//   };
//   update = async (id, data) => {
//     return await http.put(this.getCompleteUrl + "/" + id);
//   };
// }
