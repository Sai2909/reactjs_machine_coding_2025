import React, { useEffect, useRef, useState } from 'react';

function PreviousUseref() {
    const [count, setCount] = useState(0);
    const prevCount = useRef(); useEffect(() => {
        prevCount.current = count;
    }, [count]); return (<div>
        <p>Current count: {count}</p>
        <p>Previous count: {prevCount.current}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    );
} export default PreviousUseref;