import http from "../http-common";

class PokemonDataService {
  getAll() {
    return http.get("limit=20&offset=0");
  }
  getAdditionalData(){
    return http.get("/")
  }
}

export default new PokemonDataService();