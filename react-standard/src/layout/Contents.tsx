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
            <h1>{title}</h1>
            <ul>
                <li>
                    <h1>{description}</h1>
                </li>
                <li>
                    <h1>{version}</h1>
                </li>
            </ul>
        </ContentsContainer>
    );
}

export default Contents;
