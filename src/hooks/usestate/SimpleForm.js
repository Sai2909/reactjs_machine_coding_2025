import { useState } from "react";

const User = () => {
    const [user, setUser] = useState({
        name: "",
        age: "",
    });

    const handleChage = (e) => {
        const { name, value } = e.target;

        setUser({ ...user, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, age } = user;
        console.log(`ur age: ${age} and name: ${name}`);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name.."
                    value={user.name}
                    onChange={handleChage}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age.."
                    value={user.age}
                    onChange={handleChage}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default User;
