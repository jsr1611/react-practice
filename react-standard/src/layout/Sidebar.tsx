import styled from "styled-components";
import { Link } from "react-router-dom";

import { useLoginState } from "@/global/loginState";

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
    const { login } = useLoginState();
    return (
        <SidebarContainer>
            <h1>{login.userId}</h1>
            <ul>
                <li>
                    <Link to={"calculator"}>Calculator</Link>
                </li>
                <li>
                    <Link to={"counter"}>Counter</Link>
                </li>
                <li>
                    <Link to={"live-clock"}>LiveClock</Link>
                </li>
                <li>
                    <Link to={"to-do-list"}>ToDoList</Link>
                </li>
                <li>
                    <Link to={"input"}>Input</Link>
                </li>
            </ul>
        </SidebarContainer>
    );
}

export default Sidebar;
