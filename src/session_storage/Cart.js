import React, { useState } from "react";

const Cart = ({ cartItems, addItemToCart, removeItemFromCart }) => {
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if (taskText.trim() === "") return;
        const newTask = {
            id: Date.now(),
            text: taskText,
        };
        addItemToCart(newTask);
        setTaskText("");
    };

    return (
        <div>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {cartItems.map((task) => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => removeItemFromCart(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
