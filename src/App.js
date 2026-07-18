import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Basic from "./pages/Basic";
import Framework from "./pages/Frameworks";
import Tips from "./pages/Tips";
import { useContext } from "react";
import Data from "./context/Data";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
    {
    path: "/Signin",
    element: <SignIn />,
  },
    {
    path: "/Signup",
    element: <SignUp />,
  },
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
    element: <Framework />,
  },
  {
    path: "/Tips",
    element: <Tips />,
  },
]);

function App() {
  const { theme } = useContext(Data);

  console.log(theme);

  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;