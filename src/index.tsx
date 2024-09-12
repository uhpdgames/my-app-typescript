import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {storeRecipe} from "./redux/storeRecipe"

import "./index.css";

import routes from "./router";
 
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const render = () =>{

    root.render(
        <React.StrictMode>
            <RouterProvider router={routes} />
        </React.StrictMode>
    );
}

render();

storeRecipe.subscribe(render);