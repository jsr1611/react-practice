/**
 * @description Input Component
 * @see https://jumanazar.uz/react-practice
 */

import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

import loginState from "@/global/loginState";

import { useRecoilState } from "recoil";

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

    const [loginInfo, setLoginInfo] = useRecoilState(loginState);

    //event
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLoginInfo((prevState) => {
            const updInfo = {
                ...prevState,
                userId: value,
            };

            return updInfo;
        });
    };

    //watch
    useEffect(() => {
        //init
        console.log(loginInfo.userId);
    }, [loginInfo]);

    //view
    return (
        <>
            <Wrap>
                <h1>Input: {loginInfo.userId}</h1>
                <input value={loginInfo.userId} onChange={onChange} />
            </Wrap>
        </>
    );
}

export default Input;
