import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter  } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store/store"
import "./index.css"
ReactDOM.createRoot( document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);



// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";
//
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
//  import storeRecipe from "./redux/storeRecipe"
//
//
// import store from "./store";
//
//
// import "./index.css";
//
// import routes from "./router";
//
// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
//
// const render = () =>{
//
//     root.render(
//         <Provider store={storeRecipe}>
//             <RouterProvider  router={routes} />
//         </Provider>
//     );
// }
//
// render();
//
// storeRecipe.subscribe(render);