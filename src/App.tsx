
import ViewSearchResult  from "./views/recipe/RecipeSearchPage";
import ViewHome from "./views/home/HomePage";
import BaseLayout from "./layouts/BaseLayout"
import Login from "./pages/Login";
import Register from "./pages/Register";
import TodoPage from "./pages/TodoPage";
import VideoPage from "./pages/VideoPage";
import TodoPageReducer from "./pages/TodoPageReducer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
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
                path: "todo",
                element: <TodoPage />,
            },
            {
                path: "todo2",
                element: <TodoPageReducer />,
            }, 
            {
                path: "video",
                element: <VideoPage />,
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
