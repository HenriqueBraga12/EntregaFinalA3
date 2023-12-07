import { RouterProvider } from "react-router-dom";

import { Toast } from "./components";
import { router } from "./routes";

import "react-toastify/dist/ReactToastify.css";
import "./styles/reset.css";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toast />
    </div>
  );
}

export default App;
