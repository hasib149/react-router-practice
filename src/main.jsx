import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Mobiles from "./Components/Mobiles/Mobiles.jsx";
import Laptops from "./Components/Laptops/Laptops.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
    ],
  },
  {
    path: "about",
    element: (
      <div className="flex items-center justify-center h-screen  text-6xl text-cyan-400">
        About section{" "}
      </div>
    ),
  },
  {
    path: "blogs",
    element: (
      <div className="flex items-center justify-center h-screen  text-6xl text-fuchsia-400">
        All my blogs are here
      </div>
    ),
  },
  {
    path: "app",
    Component: App,
  },
  {
    path: "app2",
    element: <App></App>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>{" "}
  </StrictMode>
);
