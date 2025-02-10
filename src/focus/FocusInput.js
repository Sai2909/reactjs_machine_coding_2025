import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}

export default FocusInput


/*
import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocusButtonClick = () => {
    // Focus on the input field
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Focus Input</h2>
      <input ref={inputRef} type="text" placeholder="Enter text" />
      <button onClick={handleFocusButtonClick}>Focus Input</button>
    </div>
  );
}

export default FocusInput;

*/
