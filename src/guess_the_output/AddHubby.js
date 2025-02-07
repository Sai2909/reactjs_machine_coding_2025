import React from "react";
function AddHubby() {
    const [state, setState] = React.useState({
        name: "John",
        age: 30,
        hobbies: ["reading", "running"],
    });

    return (
        <div>
            <p>
                My name is {state.name} and I am {state.age} years old
            </p>
            <ul>
                {state.hobbies.map((hobby) => (
                    <li key={hobby}>{hobby}</li>
                ))}
            </ul>
            <button
                onClick={() =>
                    setState({ ...state, hobbies: [...state.hobbies, "swimming"] })
                }
            >
                Add hobby
            </button>
        </div>
    );
}

export default AddHubby
