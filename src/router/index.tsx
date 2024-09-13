import {createBrowserRouter } from "react-router-dom";
  
import App from "../App";
  
import RecipePage from "../pages/RecipePage";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <App   />,
      children: [
        { path: "", element: <RecipePage   /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ])


  export default routes;
  