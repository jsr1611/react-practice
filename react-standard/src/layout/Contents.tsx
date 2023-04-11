import { Outlet } from "react-router-dom";

import styled from "styled-components";

type Props = {
    title: string;
    description?: string;
    version?: number;
};

const ContentsContainer = styled.main`
    height: 100%;
    background-color: #ffffff;
`;

/**
 * @description Contents Component
 * @see https://www.jumanazar.uz/react-practice
 */
function Contents({ title, description, version }: Props) {
    return (
        <ContentsContainer>
            <Outlet />
        </ContentsContainer>
    );
}

export default Contents;
