import React, { useState } from 'react'

const ImpureFunction = () => {
    const [value, setValue] = useState();
    const handleRandom = () => {
        setValue(Math.floor(Math.random() * 100))
    }
    return (
        <div>
            <h2>{value}</h2>
            <button onClick={handleRandom}>RANDOM</button>
        </div>
    )
}

export default ImpureFunction
