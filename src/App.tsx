import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ViewSearchResult  from "./views/recipe/RecipeSearchPage";
import ViewHome from "./views/home/HomePage";
import BaseLayout from "./layouts/BaseLayout"

import Login from "./pages/Login";
import Register from "./pages/Register";


const router = createBrowserRouter([
    {
        path: "my-app-typescript",
        element: <BaseLayout />,
        errorElement: '404 Not Found',
        children: [
            {
                path: "/",
                element: <ViewHome />,
            },
            {
                path: "recipes/search",
                element: <ViewSearchResult />,
            },
            {
                path: 'login', element: <Login />,
            },
            {
                path: 'register', element: <Register />,
            },
            {
                path: '*',
                element: '404 Not Found',
            }
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
