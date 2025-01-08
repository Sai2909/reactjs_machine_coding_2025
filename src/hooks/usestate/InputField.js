import React, { useState } from 'react'

const InputField = () => {
    const [name, setName] = useState('')
    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleReset = () => {
        setName('')
    }
    return (
        <div>
            <h2>Enter Name:{name}</h2>
            <input type="text" value={name} onChange={handleChange} />
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

export default InputField
