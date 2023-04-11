import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import NotFound from "./components/NotFound";

import Calculator from "@/components/Calculator";
import Counter from "@/components/Counter";
import LiveClock from "@/components/LiveClock";
import TodoList from "@/components/ToDoList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/calculator",
                element: <Calculator />,
            },
            {
                path: "/counter",
                element: <Counter />,
            },
            {
                path: "/live-clock",
                element: <LiveClock />,
            },
            {
                path: "/to-do-list",
                element: <TodoList />,
            },
        ],
    },
    {
        path: "/about",
        element: <h1>About me</h1>,
    },
]);

export default router;
