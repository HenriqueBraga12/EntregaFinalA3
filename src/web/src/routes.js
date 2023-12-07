import { createBrowserRouter } from "react-router-dom";

import { Home, Library, SignUp, CreateGame, Login } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/library",
    element: <Library />,
  },
  {
    path: "/create-game",
    element: <CreateGame />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
