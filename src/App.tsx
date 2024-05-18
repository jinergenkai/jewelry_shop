import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Jewelry from "./pages/jewelry";

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
    path: "/jewelrys",
    element: <Jewelry/>
  },
]);

function App() {
  // const [count, setCount] = useState(0)
  return <RouterProvider router={router} />;
}

export default App;
