import styled from "styled-components";
import { Link } from "react-router-dom";

import Calculator from "@/components/Calculator";
import Counter from "@/components/Counter";
import LiveClock from "@/components/LiveClock";
import TodoList from "@/components/ToDoList";

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
        margin-top: 100px;
        padding-left: 20px;
    }
`;

/**
 * @description Sidebar Component
 * @see https://www.jumanazar.uz/react-practice
 */
function Sidebar({ title, description, menu }: Props) {
    return (
        <SidebarContainer>
            <h1>{title}</h1>
            <ul>
                <li>Page01</li>
                <li>Page02</li>
                <li>Page03</li>
                <li>Page04</li>
            </ul>
        </SidebarContainer>
    );
}

export default Sidebar;
