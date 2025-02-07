import React from "react";
function Age() {
    const [state, setState] = React.useState({
        name: "John",
        age: 30,
    });

    return (
        <div>
            <p>
                My name is {state.name} and I am {state.age} years old
            </p>
            <button onClick={() => setState({ ...state, age: state.age + 1 })}>
                Increment age
            </button>
        </div>
    );
}
export default Age