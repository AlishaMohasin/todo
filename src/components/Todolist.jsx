
import React from 'react';
import { useState } from 'react';
import TodoItem from './TodoItem';
import styles from "./todo.module.css"


const Todo = () => {

     let [value,setValue]=useState("");
    const[todos,setTodos]=useState([]);

    const onDelete=(id)=>{
        let newTodos=todos.filter((todo)=>todo.id !==id);
        setTodos(newTodos);
    };

  return (
    <div>
     
        <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Write Something'/>
        
        <button 
        className='add-button'
        onClick={()=>{
           setTodos([...todos,{id:Date.now(), value:value}]);
           setValue("");
        }}
        >
        +
         </button>
         <div className={styles.todoList}>
        {todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete}/>
             
        ))}
        </div>
    </div>
  );
};

export default Todo;