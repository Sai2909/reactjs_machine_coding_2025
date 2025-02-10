import React, { useState } from "react";

const TaskList = ({ tasks, addTask, deleteTask }) => {
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if (taskText.trim() === "") return;
        const newTask = {
            id: Date.now(),
            text: taskText,
        };
        addTask(newTask);
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
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
