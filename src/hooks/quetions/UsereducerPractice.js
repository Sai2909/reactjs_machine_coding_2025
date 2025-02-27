import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        default:
            return state
    }
}

const UsereducerPractice = () => {
    const intialState = { count: 0 }
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        </div >
    )
}

export default UsereducerPractice
