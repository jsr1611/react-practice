import Counter from "@/components/Counter";
import Input from "@/components/Input";
import LiveClock from "@/components/LiveClock";
import Popup from "@/components/Popup";
import TodoList from "@/components/ToDoList";
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
            {/* <Counter />
            <Input />
            <Popup content="This is a sample popup." btnTitle="Close" />
            <LiveClock /> */}
            <TodoList />
        </ContentsContainer>
    );
}

export default Contents;
