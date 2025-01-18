import React, { useReducer } from 'react'

/*
optimize performance when using useReducer?
Use useMemo to memoize expensive computations within the reducer.
Use React.memo to prevent unnecessary re-renders of child components.
Ensure the reducer function is pure and avoids side effects.
Split complex reducers into smaller ones if possible.
*/

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const Counter = React.memo(({ count, onIncrement, onDecrement }) => {
    console.log('Counter rendered');
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );
});

function OptimizationUserreducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => dispatch({ type: 'increment' });
    const handleDecrement = () => dispatch({ type: 'decrement' });

    return (
        <Counter
            count={state.count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
        />
    );
}

export default OptimizationUserreducer;



