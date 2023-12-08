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

  getUserGames() {
    return soteroAPI.get("/user-game/user", {
      headers: {
        Authorization: getAuthToken(),
      },
    });
  },
};
