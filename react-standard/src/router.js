import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import NotFound from "./components/NotFound";

import Calculator from "@/components/Calculator";
import Counter from "@/components/Counter";
import LiveClock from "@/components/LiveClock";
import TodoList from "@/components/ToDoList";
import Input from "./components/Input";
import Board from "./components/Board";
import Login from "./components/Login";
import { Routes } from "./mapping/Routes";

const router = createBrowserRouter([
    {
        path: Routes.Root,
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: Routes.Login,
                element: <Login />,
            },
            {
                path: Routes.Calculator,
                element: <Calculator />,
            },
            {
                path: Routes.Counter,
                element: <Counter />,
            },
            {
                path: Routes.LiveClock,
                element: <LiveClock />,
            },
            {
                path: Routes.ToDoList,
                element: <TodoList />,
                // children: [
                //     {
                //         path: "/item",
                //         element: <h1>To Do Item 1</h1>,
                //     },
                // ],
            },
            {
                path: Routes.Input,
                element: <Input />,
            },
            {
                path: Routes.Board,
                element: <Board />,
            },
        ],
    },
]);

export default router;
