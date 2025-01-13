import React from 'react'
import { Provider } from 'react-redux'
import store from './Store'
import LoginForm from './components/LoginForm'

const ReduxToolkit = () => {
    return (
        <Provider store={store}>
            <LoginForm />
        </Provider>
    )
}

export default ReduxToolkit

/*
Refer:
https://blank.hashnode.dev/getting-started-with-redux-toolkit-a-beginners-guide?ref=dailydev 
*/
