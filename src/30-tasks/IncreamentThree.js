import React, { useState } from 'react'

const IncreamentThree = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='container'>
            <h2>TASK-1: INCREMENT BY 3</h2>
            <h5>Count :{count}</h5>
            <div className='increment-button'>
                <button className='btn btn-info' onClick={() => setCount(count + 3)}>Increment</button>
            </div>

        </div>
    )
}

export default IncreamentThree
