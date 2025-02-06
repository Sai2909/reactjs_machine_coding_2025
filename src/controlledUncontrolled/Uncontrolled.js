import React, { useRef } from 'react'

const Uncontrolled = () => {
    const inputRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`input Value: ${inputRef.current.value}`)
        inputRef.current.value = ''
    }


    return (
        <div>
            <div>
                <label>
                    <input type='text' ref={inputRef} />
                </label>
                <button onClick={handleSubmit}>submit</button>
            </div>
        </div>
    )
}

export default Uncontrolled
