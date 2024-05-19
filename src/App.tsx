// import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Jewelry from "./pages/jewelry";
import DetailJewelry from "./pages/detail-jewelry";
import About from "./pages/about";
import Blog from "./pages/blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/jewelry",
    element: <Jewelry />,
  },
  {
    path: "/detail-jewelry/:name",
    element: <DetailJewelry />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

function App() {
  // const [count, setCount] = useState(0)
  return <RouterProvider router={router} />;
}

export default App;
