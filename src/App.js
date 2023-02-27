import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShoesPage from "./pages/ShoesPage";
import ShoeForm from "./pages/ShoeForm";
import Home from "./pages/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home>Home page!</Home>,
    },
    {
      path: "/about",
      element: <div>this is a shop app!</div>,
    },
    {
      path: "/shoes",
      element: <ShoesPage></ShoesPage>,
    },
    {
      path: "/:shoeId",
      element: <ShoeForm></ShoeForm>,
    },
    {
      path: "/shoes/add",
      element: <ShoeForm></ShoeForm>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
