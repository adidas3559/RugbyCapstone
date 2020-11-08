import http from "../http-common";

class PlayersDataService {
  getAll() {
    return http.get("/players");
  }

  get(id) {
    return http.get(`/players/${id}`);
  }

  create(data) {
    return http.post("/players", data);
  }

  update(id, data) {
    return http.put(`/players/${id}`, data);
  }

  delete(id) {
    return http.delete(`/players/${id}`);
  }

  deleteAll() {
    return http.delete(`/players`);
  }

  findByTitle(name) {
    return http.get(`/players?title=${name}`);
  }
}

export default new PlayersDataService();