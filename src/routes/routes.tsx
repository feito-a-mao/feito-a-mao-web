import { createBrowserRouter } from "react-router-dom";

// components
import App from "../App";
import { routes } from "../constants/routes";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { New } from "../pages/New"
import { Buy } from "../pages/Buy"

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
  {
    path: routes.new,
    element: <New />
  },
  {
    path: routes.buy,
    element: <Buy />
  }
]);
