import React, { useState } from 'react'

const LiftingStateUp = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>count:{count}</h1>
            <Increment increment={increment} />
            <ResetButton setCount={setCount} />
        </div>
    )
}

export default LiftingStateUp



const Increment = ({ increment }) => {
    return <button onClick={increment}>Increament</button>
}

const ResetButton = ({ setCount }) => {
    return <button onClick={() => setCount(0)}>Reset</button>
}

