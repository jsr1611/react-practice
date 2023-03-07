import styled from "styled-components";

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
`;

/**
 * @description Sidebar Component
 * @see https://www.jumanazar.uz/react-practice
 */
function Sidebar({ title, description, menu }: Props) {
    return (
        <SidebarContainer>
            <h1>{title}</h1>
            <h2>{menu}</h2>
        </SidebarContainer>
    );
}

export default Sidebar;
