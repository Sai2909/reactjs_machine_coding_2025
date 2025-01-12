import loginReducer from './features/LoginSlice.js'
import counterReducer from './features/CounterSlice.js'
import productReducer from './features/ProoductsSlice.js'
import crudProduct from './features/CrudProductSlice.js'
import nasaSlice from './features/Nasa.js'

// const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from '@reduxjs/toolkit'



const store = configureStore({
    reducer: {
        login: loginReducer,
        counter: counterReducer,
        productss: productReducer,
        product: crudProduct,
        nasa: nasaSlice,
    },
})

export default store;