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
`;

function Counter() {
    //state
    //read-only, update
    const [count, setCount] = useState<number>(0);

    //view
    return (
        <>
            <Wrap>
                <hr />
                <h1>Counter</h1>
                <hr />
            </Wrap>
        </>
    );
}

export default Counter;
