import React, { useRef, useState } from 'react'

const TimerUseref = () => {
    const [count, setCount] = useState(0);
    const timeRef = useRef(null);
    const timeStart = () => {
        if (timeRef.current === null) {
            timeRef.current = setInterval(() => {
                setCount(prevCount => prevCount + 1)
            }, 1000)
        }
    }

    const timeStop = () => {
        if (timeRef.current !== null) {
            clearInterval(timeRef.current);
            timeRef.current = null;
        }
    }

    const timeReset = () => {
        if (timeRef.current !== null) {
            clearInterval(timeRef.current);
            timeRef.current = null;
        }
        setCount(0)
    }
    return (
        <div>
            <p>Timer:{count}</p>
            <button onClick={timeStart}>start</button>
            <button onClick={timeStop}>stop</button>
            <button onClick={timeReset}>reset</button>
        </div>
    )
}

export default TimerUseref
