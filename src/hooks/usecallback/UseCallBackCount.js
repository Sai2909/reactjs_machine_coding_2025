import React, { useCallback, useEffect, useState } from 'react'

const UseCallBackCount = () => {
    const [count, setCount] = useState(0)
    // const Increment = useCallback(() => {
    //     setCount((preCount) => preCount + 1)
    // }, [])

    const Increment = () => {
        setCount((preCount) => preCount + 1)
    }
    useEffect(() => {
        console.log('rerenderd')
    }, [Increment])

    return (
        <div>
            <p>{count}</p>
            <button onClick={Increment}>Increment</button>
        </div>
    )
}

export default UseCallBackCount
