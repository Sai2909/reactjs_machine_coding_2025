// Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../features/CounterSlice';

const Counter = () => {
    // Correctly accessing value from the Redux store
    const { value } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Counter</h3>
            <p>Count: {value}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    );
};

export default Counter;
