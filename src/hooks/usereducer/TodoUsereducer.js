import React, { useReducer, useState } from 'react'

const initialState = {
    todos: [],
    todoCount: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                todos: [...state.todos, action.payload],
                todoCount: state.todoCount + 1
            };
        case 'removeTodo':
            return {
                ...state, //array.filter((element, index, array) => { /* logic */ }) formal syntax
                todos: state.todos.filter((_, index) => index !== action.payload), //_ is a common convention in JavaScript to indicate that a parameter is intentionally unused
                todoCount: state.todoCount - 1
            };
        default:
            return state;
    }
}

const TodoUsereducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [todo, setTodo] = useState('');
    const addTodo = () => {
        dispatch({ type: 'addTodo', payload: todo });
        setTodo('')
    }

    return (
        <div>
            <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={addTodo} disabled={!todo.trim()} >add todo</button>
            <ul>
                {
                    state.todos.map((todo, index) => (
                        <li>
                            {todo}  <button onClick={() => dispatch({ type: 'removeTodo', payload: index })}>delete todo</button>
                        </li>
                    ))
                }
            </ul>
            <p>Total Todos: {state.todoCount}</p>

        </div>
    )
}

export default TodoUsereducer
