/*
import React, { useRef, useState } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);
    const timeRef = useRef(null);

    const handleClick = () => {
        setRunning((prev) => !prev)
        if (running) {
            clearInterval(timeRef.current)
        } else {
            timeRef.current = setInterval(() => {
                setCount((prev) => prev + 1)
            }, 1000)
        }

    }

    return (
        <div>
            <h2>Timer Machine_Coding</h2>
            <div>
                <h2>Timer:{count}</h2>
            </div>
            <div>
                <button onClick={handleClick}>
                    {running ? "stop" : "start"}
                </button>
            </div>
        </div>
    )
}

export default Timer
*/

import React, { useRef, useState } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);
    const timeRef = useRef(null);

    // Start the timer
    const handleStart = () => {
        if (!running) {
            timeRef.current = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 100);
            setRunning(true);
        }
    };

    // Pause the timer
    const handlePause = () => {
        if (running) {
            clearInterval(timeRef.current);
            setRunning(false);
        }
    };

    // Stop the timer
    const handleStop = () => {
        clearInterval(timeRef.current);
        setRunning(false);
        setCount(0);
    };

    // Cleanup the interval on component unmount
    React.useEffect(() => {
        return () => clearInterval(timeRef.current);
    }, []);

    return (
        <div>
            <h2>Timer Machine_Coding</h2>
            <div>
                <h2>Timer: {count}</h2>
            </div>
            <div>
                <button onClick={handleStart} >
                    Start
                </button>
                <button onClick={handlePause} >
                    Pause
                </button>
                <button onClick={handleStop} >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer;
