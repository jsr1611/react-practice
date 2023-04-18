/**
 * @description Input Component
 * @see https://jumanazar.uz/react-practice
 */

import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

import { useLoginState } from "@/global/loginState";

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
    // const [inputValue, setInput] = useState<string>("");

    const { login, setLogin, resetLogin } = useLoginState();

    //event
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLogin((prevState) => {
            const updInfo = {
                ...prevState,
                userId: value,
            };

            return updInfo;
        });
    };

    const onReset = () => {
        resetLogin();
    };

    //watch
    useEffect(() => {
        //init
        console.log(login.userId);
    }, [login]);

    //view
    return (
        <>
            <Wrap>
                <h1>Input: {login.userId}</h1>
                <input value={login.userId} onChange={onChange} />
                <button onClick={onReset}>Reset</button>
            </Wrap>
        </>
    );
}

export default Input;
