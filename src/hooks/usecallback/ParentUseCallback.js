import React, { useCallback, useState } from 'react';
const ChildCompoennt = React.memo(({ onClick }) => {
    console.log("child renderd..")
    return (
        <button onClick={onClick}>Clickme</button>
    )
})



const ParentUseCallback = () => {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        console.log("buttom clikced")
    }, [])

    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <ChildCompoennt onClick={handleClick} />
        </div>
    )
}

export default ParentUseCallback
