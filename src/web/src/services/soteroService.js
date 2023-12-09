import { HttpStatusCode } from "axios";

import { cleanAuthToken, getAuthToken } from "../functions";
import { fetchProvider } from "../providers";

const soteroAPI = fetchProvider(process.env.REACT_APP_API_URL);

soteroAPI.interceptors.request.use((config) => {
  const authToken = getAuthToken();

  if (!authToken) return config;

  config.headers.Authorization = authToken;

  return config;
});

soteroAPI.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error?.response?.status === HttpStatusCode.Unauthorized) {
      cleanAuthToken();
      window.location.replace("/login?sessionExpired=true");
    }
    return Promise.reject(error);
  }
);

export const soteroService = {
  postLogin(data) {
    return soteroAPI.post("/login", data);
  },

  postSignUp(data) {
    return soteroAPI.post("/signup", data);
  },

  getGames() {
    return soteroAPI.get("/game");
  },

  getUserGames() {
    return soteroAPI.get("/user-game/user");
  },

  getGameCategories() {
    return soteroAPI.get("/game-category");
  },

  postCreateUserGame(data) {
    return soteroAPI.post("/user-game/create", data);
  },

  postAddUserGameCategory(data) {
    return soteroAPI.post("/user-game-category/create", data);
  },
};
