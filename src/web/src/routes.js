import { createBrowserRouter } from "react-router-dom";

import { Home, SignUp } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);