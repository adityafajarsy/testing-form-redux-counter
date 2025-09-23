import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import Exp from "./pages/Exp.jsx";
import { Provider } from "react-redux";
import {store} from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Exp />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
