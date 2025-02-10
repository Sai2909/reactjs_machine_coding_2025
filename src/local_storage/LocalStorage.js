import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";

const LocalStorage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <div className="App">
            <h1>Task Management App</h1>
            <TaskList tasks={tasks} addTask={addTask} deleteTask={deleteTask} />
        </div>
    );
};

export default LocalStorage;
