import React, { useState } from 'react'

const NormalCounter = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <button onClick={handleClick}>
            you clicked {count} times
        </button>
    )
}

export default NormalCounter
