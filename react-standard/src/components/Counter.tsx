/**
 * @description Counter Component
 * @see https://jumanazar.uz/react-practice
 *
 */

import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
    padding: 10px;
    h1 {
        font-size: 2em;
    }
    button {
        margin-right: 5px;
        width: 30px;
        height: 30px;
    }
`;

function Counter() {
    //state
    //read-only, update
    const [count, setCount] = useState<number>(0);

    //event
    const onIncrease = () => {
        setCount((prevSt) => prevSt + 1);
    };
    const onDecrease = () => {
        setCount(count - 1);
    };

    //view
    return (
        <>
            <Wrap>
                <hr />
                <h1>Counter: {count}</h1>
                <button onClick={() => setCount((prevSt) => prevSt + 3)}>
                    +
                </button>
                <button onClick={() => setCount((prevSt) => prevSt - 1)}>
                    -
                </button>
                <hr />
            </Wrap>
        </>
    );
}

export default Counter;
