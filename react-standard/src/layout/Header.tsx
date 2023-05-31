import styled from "styled-components";

import { useLoginState } from "@/global/loginState";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Routes } from "@/mapping/Routes";

type Props = {
    name: string;
    title: string;
    description: string;
};

const HeaderContainer = styled.header`
    width: 100%;
    height: 120px;
    background-color: #a6f78b;
    button {
        margin: 10px;
    }
`;

/**
 * @description Header Component
 * @see https://www.jumanazar.uz/react-practice
 */
function Header({ name, title, description }: Props) {
    //global state
    const { resetLogin } = useLoginState();

    //router-info
    const navigate = useNavigate();

    const onLogout = () => {
        resetLogin();

        //remove login from cookies
        Cookies.remove(Routes.isLoggedIn);

        //url -> login
        navigate(Routes.Login);
    };

    //view
    return (
        <HeaderContainer>
            <h2>Header</h2>
            <button onClick={onLogout}>Logout</button>
        </HeaderContainer>
    );
}

export default Header;
