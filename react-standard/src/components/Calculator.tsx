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
    const [Operation, setOperation] = useState<string>("");
    const [InputValue, setInputValue] = useState<string>("");
    // const [InputValue2, setInputValue2] = useState<string>("");
    const [Result, setResult] = useState<string>("");

    //event
    const onAddNumber = (number: number) => {
        setInputValue((prevValue) => prevValue + number.toString());
    };

    const onAddOperator = (op: string) => {
        setInputValue((prevValue) => prevValue + op);
    };

    // const onSubNumber = (op: string) => {
    //     setResult(Number(InputValue) - Number(InputValue2));
    // };

    const calc = () => {
        if (Operation.startsWith("+")) {
            setResult(InputValue);
        }
    };

    const onDelete = () => {
        setInputValue((prevValue) => prevValue.slice(0, -1));
    };

    const onDeleteAll = () => {
        setInputValue("");
    };

    // view
    return (
        <MainContainer>
            <InputBar readOnly value={InputValue} />
            <ButtonContainer>
                <Button onClick={() => onDeleteAll()}>AC</Button>
                <Button onClick={() => onDelete()}>DEL</Button>
                <CalButton>%</CalButton>
                <CalButton>÷</CalButton>
                <Button onClick={() => onAddNumber(7)}>7</Button>
                <Button onClick={() => onAddNumber(8)}>8</Button>
                <Button onClick={() => onAddNumber(9)}>9</Button>
                <CalButton>×</CalButton>
                <Button onClick={() => onAddNumber(4)}>4</Button>
                <Button onClick={() => onAddNumber(5)}>5</Button>
                <Button onClick={() => onAddNumber(6)}>6</Button>
                <CalButton>-</CalButton>
                <Button onClick={() => onAddNumber(1)}>1</Button>
                <Button onClick={() => onAddNumber(2)}>2</Button>
                <Button onClick={() => onAddNumber(3)}>3</Button>
                <CalButton onClick={() => onAddOperator("+")}>+</CalButton>
                <ZeroButton onClick={() => onAddNumber(0)}>0</ZeroButton>
                <Button>.</Button>
                <CalButton onClick={() => calc()}>=</CalButton>
            </ButtonContainer>
        </MainContainer>
    );
}

export default Calculator;
