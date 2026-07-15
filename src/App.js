import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import Basic from './pages/Basic';
import Frameworks from './pages/Frameworks';
import Tips from './pages/Tips';
import {useContext } from "react";
import Data from "./context/Data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Not Found</h1>,
  },
    {
    path: "/Basic",
    element: <Basic />,
  },
    {
    path: "/Frameworks",
    element: <Frameworks />,
  },
    {
    path: "/Tips",
    element: <Tips />,
  },
]);
function App() {
    const {theme} = useContext(Data);              

  return (
    <div className={`${theme}`}>
      <h1>hello</h1>
    <RouterProvider router={router} />
</div>

  );
}

export default App;
