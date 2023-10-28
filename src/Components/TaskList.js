import React, {useReducer,useState,useEffect,useRef } from 'react';
import { taskReducer,initialState } from '../Reducer/TaskReducer';
import Task from './Task'; // Import the Task component
import AddTask from "./AddTask";
import styles from "./styles.module.scss";

const TaskList = () => {
    const initialRender =useRef(false)
    const [state, dispatch] = useReducer(taskReducer, initialState);
  
    const addTask = (newTask) => {
        const newTaskWithId = {
          ...newTask,
          id: state.tasks.length + 1,
        };
    
        dispatch({ type: 'ADD_TASK', payload: newTaskWithId });
    
      };
  
    const markAsCompleted = (taskId) => {
      dispatch({ type: 'MARK_COMPLETED', payload: taskId });
    };
    const deleteTask = (taskId) => {
        dispatch({ type: 'DELETE_TASK', payload: taskId });
      };
   

    
    
      useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("taskList"));
        if (storedTasks && !initialRender.current) {
            dispatch({ type: 'SET_TASKS', payload: storedTasks });
          }
          else{
            localStorage.setItem("taskList", JSON.stringify(state.tasks));
          }
       
        initialRender.current =true
      }, [state.tasks]);
  
    return (
        <>
        <div className={styles.taskContainer}>
        <h1>Task List</h1>
        <ul>
          {state?.tasks?.map((task) => (
            <li key={task.id}>
              <Task  onDelete={deleteTask} task={task} onMarkAsCompleted={markAsCompleted} />
            </li>
          ))}
        </ul>
         
      </div>
        <AddTask addTask={addTask}/>
        </>
      
    );
  };
  
  export default TaskList;
