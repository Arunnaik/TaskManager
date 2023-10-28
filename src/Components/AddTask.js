import React, { useState } from "react";
import styles from "./styles.module.scss";
const Task = ({ addTask }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "not completed",
  });
  const addTaskHandler = () => {
    addTask(newTask);
    setNewTask({ title: "", description: "", status: "not completed" });
  };
  return (
    <div className={styles.addTaskCont}>
      <h2>Add Task</h2>
      <div className={styles.inputCont}>
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <button className={styles.btn} onClick={addTaskHandler}>Add Task</button>
      </div>
    </div>
  );
};

export default Task;
