import React, { createContext, useContext } from 'react';

const UserContext = createContext();

const Parent = () => {
    return (
        <UserContext.Provider value={{ name: "saikiran" }}>
            <Child />
        </UserContext.Provider>
    );
};

const Child = () => {
    return <ContextApiComonent />;
};

const ContextApiComonent = () => {
    const user = useContext(UserContext);

    return (
        <div>
            {user.name}
        </div>
    );
};

export default Parent;


/*
using prop drilling:

 const Parent = ({ user }) => <Child user={user} />;
  const Child = ({ user }) => <Grandchild user={user} />;
  const Grandchild = ({ user }) => <div>{user.name}</div>;
*/
