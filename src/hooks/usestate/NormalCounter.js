import React, { useState } from 'react'

const NormalCounter = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <button onClick={handleClick}>
            you clicked {count} times
            <Counter />
        </button>
    )
}

export default NormalCounter


const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>Increament</button>
        </div>
    )
}

