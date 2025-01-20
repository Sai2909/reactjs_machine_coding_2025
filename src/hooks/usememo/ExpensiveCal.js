import React, { useState, useMemo } from 'react';
function ExpensiveComponent({ a, b }) {
    const computeExpensiveValue = (a, b) => {
        console.log('Computing expensive value...');
        // Simulate an expensive computation
        return a + b;
    }; const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    return (
        <div>
            <p>Computed Value: {memoizedValue}</p>
        </div>
    );
}

function Expensive() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);
    return (
        <div>
            <ExpensiveComponent a={a} b={b} />
            <button onClick={() => setA(a + 1)}>Increment A</button>
            <button onClick={() => setB(b + 1)}>Increment B</button>
        </div>
    );
} export default Expensive;