import React, { useRef } from 'react'

function LatestValueUseRef() {
    const inputRef = useRef(null)
    const handleRef = () => {
        console.log(inputRef.current.value)
    }
    return (
        <div>

            <input type="text" ref={inputRef} />
            <button onClick={handleRef}>Latest</button>
        </div>
    )
}

export default LatestValueUseRef
