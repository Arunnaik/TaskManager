import React from 'react';
import styles from "./styles.module.scss";
const Task = ({ task, onMarkAsCompleted }) => {
const completed =task.status==="completed"
  return (
    <div className={completed?`${styles.list} ${styles.listCompleted}`:styles.list}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.status}</p>
      {!completed && 
        <button className={styles.btn}  onClick={()=>onMarkAsCompleted(task.id)}>Mark as Completed</button>
      }
    </div>
  );
};

export default Task;
