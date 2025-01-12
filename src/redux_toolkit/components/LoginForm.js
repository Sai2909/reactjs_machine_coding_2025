import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword, setUsername, clearLogin } from '../features/LoginSlice';
import Counter from './Counter';
import Products from './CreateProducts';
import CrudProduct from './CrudProduct';
import NasaView from './NasaComponent';

const LoginForm = () => {
    const { username, password } = useSelector((state) => state.login);
    const dispatch = useDispatch();

    const handleLogin = () => {
        console.log('UserName:', username, 'Password:', password); // Ensure this is called
    };




    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => dispatch(setUsername(e.target.value))}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                />
                <button onClick={handleLogin}>Login</button>
                <button onClick={() => dispatch(clearLogin())}>Clear</button>
            </div>
            <div>
                <Counter />
            </div>
            <div>
                <Products />
            </div>
            <div>
                <CrudProduct />
            </div>
            <div>
                <NasaView />
            </div>
        </>
    );
};

export default LoginForm;


// we can use Below code  we dont need to add in intial values in createSlice in Features
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setPassword, setUsername, clearLogin } from '../features/LoginSlice';

// const LoginForm = () => {
//     const dispatch = useDispatch();

//     // Use local state for input fields
//     const [localUsername, setLocalUsername] = useState('');
//     const [localPassword, setLocalPassword] = useState('');

//     const handleLogin = () => {
//         // Dispatch the local state to Redux store on login
//         dispatch(setUsername(localUsername));
//         dispatch(setPassword(localPassword));
//         console.log('UserName:', localUsername, 'Password:', localPassword);
//     };

//     const handleClear = () => {
//         // Clear local state and dispatch clear action
//         setLocalUsername('');
//         setLocalPassword('');
//         dispatch(clearLogin());
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Username"
//                 value={localUsername}
//                 onChange={(e) => setLocalUsername(e.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={localPassword}
//                 onChange={(e) => setLocalPassword(e.target.value)}
//             />
//             <button onClick={handleLogin}>Login</button>
//             <button onClick={handleClear}>Clear</button>
//         </div>
//     );
// };

// export default LoginForm;
