import Counter from "@/components/Counter";
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
            <Counter />
        </ContentsContainer>
    );
}

export default Contents;
