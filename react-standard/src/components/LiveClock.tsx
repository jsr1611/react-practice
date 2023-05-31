import { useState, useEffect } from "react";
import styled from "styled-components";

const Wrap = styled.div`
    padding: 10px;
    h1 {
        font-size: 1.5em;
        margin-bottom: 15px;
    }
`;

/**
 * @description 실시간 시계
 */
function LiveClock() {
    // state
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    // watch
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentTime(new Date());
        }, 1000);

        // clean-up: javascript does have Garbage Collector,
        // so manually need to clean, otherwise, due to use this function,
        // window may not work or interrupt the system workflow.
        return () => {
            clearTimeout(timer);
        };
    }, [currentTime]);

    // view
    return (
        <Wrap>
            <h1>Live Clock</h1>
            <div>{currentTime.toString()}</div>
        </Wrap>
    );
}

export default LiveClock;
