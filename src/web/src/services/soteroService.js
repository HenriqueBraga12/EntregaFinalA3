import { getAuthToken } from "../functions";
import { fetchProvider } from "../providers";

const soteroAPI = fetchProvider(process.env.REACT_APP_API_URL);

export const soteroService = {
  postLogin(data) {
    return soteroAPI.post("/login", data);
  },

  postSignUp(data) {
    return soteroAPI.post("/signup", data);
  },

  getGames() {
    return soteroAPI.get("/game", {
      headers: {
        Authorization: getAuthToken(),
      },
    });
  },

  getUserGames() {
    return soteroAPI.get("/user-game/user", {
      headers: {
        Authorization: getAuthToken(),
      },
    });
  },
};
