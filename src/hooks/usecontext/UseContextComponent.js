import React, { createContext, useState } from 'react'
import Component1 from './Component1';

export const UserContext = createContext();

const UseContextComponent = () => {
    const [user, setUser] = useState("Hello");

    return (
        <UserContext.Provider value={user}>
            <h1>{`sai${user}`}</h1>
            <Component1 />
        </UserContext.Provider>
    )
}

export default UseContextComponent
