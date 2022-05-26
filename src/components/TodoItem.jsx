import React from 'react';
import { useState } from 'react';
import styles from "./todo.module.css";

const TodoItem = ({ todo,onDelete}) => {
 const[isCompleted,setIsCompleted]=useState(todo.isComplete);

    return (
    <div className={styles.todo} key={todo.id}>
        <input
        className="checkbox"
        type="checkbox"
        checked={isCompleted}
        onChange={(e)=>{
            setIsCompleted(e.target.checked);
        }}
    />
    <div className={isCompleted ? styles.striked:""}>{todo.value}</div>
    <button className='delete' onClick={()=>onDelete(todo.id)}> x </button>
    </div>
  );
};

export default TodoItem;