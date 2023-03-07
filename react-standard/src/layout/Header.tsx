import styled from "styled-components";

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
    //view
    return (
        <HeaderContainer>
            <h1>{name}</h1>
            <h2>{title}</h2>
            <h2>{description}</h2>
        </HeaderContainer>
    );
}

export default Header;
