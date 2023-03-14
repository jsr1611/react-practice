/**
 * @description Input Component
 * @see https://jumanazar.uz/react-practice
 */

import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
    padding: 10px;
    h1 {
        font-size: 2em;
    }

    input {
        margin-top: 10px;
        padding: 10px;
    }
`;

function Input() {
    //state
    const [inputValue, setInput] = useState<string>("");

    //event
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);
    };

    //view
    return (
        <>
            <Wrap>
                <h1>Input: {inputValue}</h1>
                <input value={inputValue} onChange={onChange} />
            </Wrap>
        </>
    );
}

export default Input;
