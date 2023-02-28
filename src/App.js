import React from "react";
import { useState,useEffect } from "react";
import ClickAwayListener from 'react-click-away-listener';
import './App.css'


var tasks = ['Make to do list app','Make it work']
// const AddTask = ()=>{
//     return(
        
//     )
// }
const Task = ({task})=>{
    return(
        <div className="task">
            <label><input type='checkbox'></input>{task}</label>
            <div className="actions">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#00bcd4">
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 
                    71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 
                    8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#f44336">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 
                    296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
};

const App = ()=>{
    const [popup,setpopup] = useState(false);
    return(
        <div className="app">
            <h1>To do list</h1>
            <div className="container">
                {tasks.map((task)=>(
                    <Task task={task}/>
                ))}
            </div>
            <button className="add_task" onClick={()=>{setpopup(true)}}>+</button>
            <div className="popup_container">
            {popup && (
            <ClickAwayListener onClickAway = {()=>setpopup(false)}>
                
                    <div className="popup">
                        <input type="text" placeholder="Enter your task"></input>
                        <button>Submit</button>
                    </div>
                
            </ClickAwayListener>)}
            </div>
        </div>
    )
};

export default App;
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   }

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim() === '') {
//       return;
//     }
//     const newTodo = {
//       id: new Date().getTime(),
//       task: inputValue,
//       completed: false
//     };
//     setTodos([...todos, newTodo]);
//     setInputValue('');
//   }

//   const handleTodoToggle = (id) => {
//     const updatedTodos = todos.map(todo => {
//       if (todo.id === id) {
//         return { ...todo, completed: !todo.completed };
//       } else {
//         return todo;
//       }
//     });
//     setTodos(updatedTodos);
//   }

//   const handleTodoDelete = (id) => {
//     const filteredTodos = todos.filter(todo => todo.id !== id);
//     setTodos(filteredTodos);
//   }

//   return (
//     <div className="App">
//       <h1>To-Do List</h1>
//       <form onSubmit={handleFormSubmit}>
//         <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Add a to-do..." />
//         <button type="submit">Add</button>
//       </form>
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id} className={todo.completed ? 'completed' : ''}>
//             <span onClick={() => handleTodoToggle(todo.id)}>{todo.task}</span>
//             <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
