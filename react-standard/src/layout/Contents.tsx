import Counter from "@/components/Counter";
import Input from "@/components/Input";
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
            <Input />
        </ContentsContainer>
    );
}

export default Contents;
