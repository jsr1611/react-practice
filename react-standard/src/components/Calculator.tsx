import { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const ButtonContainer = styled.div`
    display: grid;
    width: 40%;
    max-width: 450px;
    height: 50%;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`;

const Button = styled.button`
    background-color: #f2f3f5;
    border: none;
    color: black;
    font-size: 1.5rem;
    border-radius: 35px;
    cursor: pointer;
    box-shadow: 3px 3px 3px lightgray;

    &:active {
        margin-left: 2px;
        margin-top: 2px;
        box-shadow: none;
    }
`;

const CalButton = styled(Button)`
    font-size: 2rem;
    color: white;
    background-color: #4b89dc;
`;

const ZeroButton = styled(Button)`
    grid-column: 1/3;
`;

const InputBar = styled.input`
    width: 40%;
    max-width: 450px;
    height: 65px;
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 30px;
    border: 2px solid #4b89dc;
    text-align: right;
    padding-right: 20px;
    &:focus {
        outline: none;
    }
`;

/**
 * @description 계산기 컴포넌트
 */
function Calculator() {
    //state
    const [InputValue, setInputValue] = useState<string>("");

    //event
    const onAddNumber = (number: number) => {
        setInputValue((prevValue) => prevValue + number.toString());
    };

    // view
    return (
        <MainContainer>
            <InputBar readOnly value={InputValue} />
            <ButtonContainer>
                <Button>AC</Button>
                <Button>DEL</Button>
                <CalButton>%</CalButton>
                <CalButton>÷</CalButton>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <CalButton>×</CalButton>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <CalButton>-</CalButton>
                <Button onClick={() => onAddNumber(1)}>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <CalButton>+</CalButton>
                <ZeroButton>0</ZeroButton>
                <Button>.</Button>
                <CalButton>=</CalButton>
            </ButtonContainer>
        </MainContainer>
    );
}

export default Calculator;
