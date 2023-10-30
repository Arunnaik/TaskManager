import React, { useState } from "react";
import styles from "./styles.module.scss";
const Task = ({ addTask }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "not completed",
  });
  const addTaskHandler = (e) => {
    e.preventDefault()
    addTask(newTask);
    setNewTask({ title: "", description: "", status: "not completed" });
  };
  return (
    <div className={styles.addTaskCont}>
      <h2>Add Task</h2>
      <form onSubmit={addTaskHandler} className={styles.inputCont}>
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          required
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          required
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <button type="submit" className={styles.btn}>Add Task</button>
      </form>
    </div>
  );
};

export default Task;
