import styled from "styled-components";

import { useLoginState } from "@/global/loginState";

type Props = {
    name: string;
    title: string;
    description: string;
};

const HeaderContainer = styled.header`
    width: 100%;
    height: 120px;
    background-color: #a6f78b;
`;

/**
 * @description Header Component
 * @see https://www.jumanazar.uz/react-practice
 */
function Header({ name, title, description }: Props) {
    const { login } = useLoginState();

    //view
    return (
        <HeaderContainer>
            <h2>{name}</h2>
            <h2>{login.userId}</h2>
            <h2>{description}</h2>
        </HeaderContainer>
    );
}

export default Header;
