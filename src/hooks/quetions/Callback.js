// import React, { useCallback } from 'react';

const ParentComponent = () => {
    // const handleClick = useCallback(() => {
    //     console.log("Button clicked");
    // }, []); // Memoize the callback so it doesn't change

    const handleClick = () => {
        console.log("heyy manchala")
    }

    return <ChildComponent onClick={handleClick} />;
};

const ChildComponent = ({ onClick }) => (
    <button onClick={onClick}>Click Me</button>
);

export default ParentComponent