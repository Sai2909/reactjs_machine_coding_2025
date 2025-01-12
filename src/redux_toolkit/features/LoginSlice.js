import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        username: '',
        password: ''
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        clearLogin: (state) => {
            state.username = '';
            state.password = '';
        }
    }
})

export const { setPassword, setUsername, clearLogin } = loginSlice.actions;
export default loginSlice.reducer;