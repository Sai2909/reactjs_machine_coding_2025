import React, { useRef, useState } from 'react'; 
function ClickCounter() {
    const clickCount = useRef(0);
    const [displayCount, setDisplayCount] = useState(0); const handleClick = () => {
        clickCount.current += 1;
        setDisplayCount(clickCount.current);
    }; return (<div>
        <button onClick={handleClick}>Click me</button>
        <p>Button clicked {displayCount} times</p>
    </div>
    );
} export default ClickCounter;

/*
Here, clickCount is incremented on each button click, but it doesn’t cause a re-render. 
Instead, the state displayCount is updated to reflect the current count, ensuring the component re-renders only when necessary.
*/