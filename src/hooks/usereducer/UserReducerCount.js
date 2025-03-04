import React, { useReducer } from 'react'

const initialState = {
  count: 0
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state;
  }
}

const UserReducerCount = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>count :{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  )
}

export default UserReducerCount
