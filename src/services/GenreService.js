import { ApiService } from "./apiService";

class GenreService extends ApiService {
  endpoint = "posts/";
}

export default new GenreService();
