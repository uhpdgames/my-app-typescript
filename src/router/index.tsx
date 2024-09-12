import {createBrowserRouter } from "react-router-dom";
  
import App from "../App";
  
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";

import {storeRecipe} from "../redux/storeRecipe";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <App   />,
      children: [
        { path: "", element: <HomePage  state={storeRecipe.getState()} dispatch ={storeRecipe.dispatch}  /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ])


  export default routes;
  