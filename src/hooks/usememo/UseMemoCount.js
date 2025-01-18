import React, { useMemo, useState } from 'react'

const UseMemoCount = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(1);


    const exprensiveCal = useMemo(() => {
        console.log('calculating');
        return value * 10
    }, [value])
    return (
        <div>
            <p>Intial:{count}</p>
            <h2>{exprensiveCal}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setValue(value + 1)}>IncrementByValue_useMemo</button>
        </div>
    )
}

export default UseMemoCount
