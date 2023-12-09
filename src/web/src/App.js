import { RouterProvider } from "react-router-dom";

import { Toast } from "./components";
import { DialogProvider } from "./providers/dialogProvider";
import { router } from "./routes";

import "react-toastify/dist/ReactToastify.css";
import "./styles/reset.css";

function App() {
  return (
    <DialogProvider>
      <RouterProvider router={router} />
      <Toast />
    </DialogProvider>
  );
}

export default App;
