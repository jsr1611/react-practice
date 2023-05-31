import styled from "styled-components";
import { Link } from "react-router-dom";

import { useLoginState } from "@/global/loginState";
import { Routes } from "@/mapping/Routes";

type Props = {
    title: string;
    description?: string;
    menu?: string;
};

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: #a4d1c7;

    li {
        font-size: 1.5em;
        margin-top: 80px;
        padding-left: 20px;
    }
`;

/**
 * @description Sidebar Component
 * @see https://www.jumanazar.uz/react-practice
 */
function Sidebar({ title, description, menu }: Props) {
    const { login } = useLoginState();
    return (
        <SidebarContainer>
            <h1>{login.userId}</h1>
            <ul>
                <li>
                    <Link to={Routes.Calculator}>Calculator</Link>
                </li>
                <li>
                    <Link to={Routes.Counter}>Counter</Link>
                </li>
                <li>
                    <Link to={Routes.LiveClock}>LiveClock</Link>
                </li>
                <li>
                    <Link to={Routes.ToDoList}>ToDoList</Link>
                </li>
                <li>
                    <Link to={Routes.Input}>Input</Link>
                </li>
                <li>
                    <Link to={Routes.Board}>Board</Link>
                </li>
            </ul>
        </SidebarContainer>
    );
}

export default Sidebar;
