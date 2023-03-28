import styled from "styled-components";

const MyContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const MyButton = styled.button`
    width: 25px;
    height: 25px;
`;

function MyCalculator() {
    return (
        <MyContainer>
            <MyButton>AC</MyButton>
            <MyButton>DEL</MyButton>
            <MyButton>+</MyButton>
            <MyButton>-</MyButton>
            <MyButton>*</MyButton>
            <MyButton>/</MyButton>
            <MyButton>=</MyButton>
        </MyContainer>
    );
}

export default MyCalculator;
