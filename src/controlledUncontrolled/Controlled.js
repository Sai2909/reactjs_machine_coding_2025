import React, { useState } from 'react';

export default function Controlled() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>Input Value: {inputValue}</p>
        </div>
    );
}