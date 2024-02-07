import { createBrowserRouter } from "react-router-dom";

// components
import App from "../App";
import { routes } from "../constants/routes";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.register,
    element: <Register />,
  },
]);
