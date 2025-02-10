import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium",
    completed: false,
  });

  const handleNewTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask({
      title: "",
      description: "",
      priority: "medium",
      completed: false,
    });
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEditTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const toggleCompleted = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div >
      <form onSubmit={handleAddTask} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={newTask.title}
          onChange={handleNewTaskChange}
        />
        <textarea
          name="description"
          placeholder="Task description"
          value={newTask.description}
          onChange={handleNewTaskChange}
        />
        <select
          name="priority"
          value={newTask.priority}
          onChange={handleNewTaskChange}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </h3>
            <p>{task.description}</p>
            <div>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
              <button onClick={() => toggleCompleted(index)}>
                {task.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button
                onClick={() => {
                  const updatedTask = prompt("Enter updated task:");
                  if (updatedTask) {
                    handleEditTask(index, {
                      ...task,
                      title: updatedTask,
                    });
                  }
                }}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
