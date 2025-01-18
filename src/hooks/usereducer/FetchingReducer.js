import React, { useEffect, useReducer } from 'react'

const intialState = {
    data: null,
    loading: true,
    error: null,
}
function reducer(state, action) {
    switch (action.type) {
        case 'fetchSuccess':
            return {
                data: action.payload, loading: false, error: null
            }
        case 'fetchErro':
            return {
                data: null, loading: false, error: action.payload
            }
        default:
            return state
    }
}



const FetchingReducer = () => {
    const [state, dispatch] = useReducer(reducer, intialState)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then(data => dispatch({ type: 'fetchSuccess', payload: data }))
            .catch(error => dispatch({ type: 'fetchErro', payload: error }))
    }, [])

    if (state.loading) {
        <p>loading...</p>
    }

    if (state.error) return <p>Error: {state.error.message}</p>;

    return (
        <div>
            return <div>Data: {JSON.stringify(state.data)}</div>;
        </div>
    )
}

export default FetchingReducer
