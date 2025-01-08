import React, { useState } from 'react'

const UseStateCounter = () => {
    const [increment, setIncreament] = useState(0);
    const handleClick = () => {
        setIncreament((prev) => prev + 1)
    }
    return (
        <div>
            <p>count:{increment}</p>
            <button onClick={handleClick}>Increament</button>
            <Message />
        </div>

    )
}

export default UseStateCounter

const Message = () => {
    const [message, setMessage] = useState('');
    const handleChange = (e) => {
        // let val = e.target.value;
        // setMessage(prev => prev + val)
        setMessage(e.target.value)
    }
    return (
        <>
            <div>
                <input type="text" onChange={handleChange} />
            </div>
            <div>
                <p>{message}</p>
            </div>
        </>

    )
}
