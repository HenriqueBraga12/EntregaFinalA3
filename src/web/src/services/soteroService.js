import { fetchProvider } from "../providers";

console.log(process.env);

const soteroAPI = fetchProvider(process.env.REACT_APP_API_URL);

export const soteroService = {
  postLogin(data) {
    return soteroAPI.post("/login", data);
  },

  postSignUp(data) {
    return soteroAPI.post("/signup", data);
  },
};
