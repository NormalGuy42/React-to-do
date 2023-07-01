import React from "react";
import { useState } from "react";
import ClickAwayListener from 'react-click-away-listener';
import './App.css'



const App = ()=>{
    const [tasks,setTasks] = useState([]); 
    const [inputValue,setInputValue] = useState('')
    const [popup,setpopup] = useState(false);
    const [editMode,setEditMode] = useState(false);
    const [editID,setEditID] = useState('');
    
    const Task = ({task})=>{
        return(
            <div className="task" key={task.id}>
                <label className={task.completed?'completed':''}><input type='checkbox' onChange={()=>updateTask(task.id)} checked={task.completed}></input>{task.value}</label>
                <div className="actions">
                    <button onClick={()=>editTask(task)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#00bcd4">
                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 
                        71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 
                        8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                        </svg>
                    </button>
                    <button onClick={()=>deleteTask(task.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#f44336">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 
                        296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                        </svg>
                    </button>
                </div>
            </div>
        )
    };

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim() === ''){
            return;
        }
        const newTask = {
            id: new Date().getTime(),
            value: inputValue,
            completed: false,
        }
        setTasks([...tasks,newTask]);
        setInputValue('');
        setpopup(false);
    }
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }
    
    //Delete
    const deleteTask = (id)=>{
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    }
    const updateTask = (id)=>{
        const updatedTasks = tasks.map(task=>{
            if(task.id === id){
                return {...task,completed: !task.completed};
            }else{
                return task;
            }
        })
        setTasks(updatedTasks);
    }
    //Edits
    const editTask = (task)=>{
        setInputValue(task.value);
        setpopup(true);
        setEditMode(true);
        setEditID(task.id)
    }
    const handleEditForm = ()=>{
        let id = editID;
        const editedTasks = tasks.map(task=>{
            if(task.id === id){
                return {...task,value:inputValue};
            }else{
                return task;
            }
        })
        setTasks(editedTasks);
        setInputValue('');
        setpopup(false);
        setEditMode(false);
    }
    return(
        <div className="app">
            <h1>To do list</h1>
            <div className="container">
                {tasks.map((task)=>(
                    <Task task={task}/>
                ))}
            </div>
            <button className="add_task" onClick={()=>{setpopup(true)}}>+</button>
            {popup && (
            <ClickAwayListener onClickAway = {()=>setpopup(false)}>
                <div className="popup_container">
                <form className="popup" onSubmit={editMode?handleEditForm:handleFormSubmit}>
                    <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter your task"></input>
                    <button type="submit">Submit</button>
                </form>
                </div>
            </ClickAwayListener>)}
        </div>
    )
};
export default App;
