import React from 'react'
import { useState } from 'react'
import '../App.css'

export default function Todo() {
    const [todo, SetTodo] = useState({name:"", done:false})
    const [todos, SetTodos] = useState([]);
    function handleSubmit(e){
       //set the value of Todo inside Todos
        SetTodos([...todos, todo]);
        //prevent page from reloading
        e.preventDefault();
        //set input space back to empty 
        SetTodo("");
    }
    //Deletes items
    function handleDelete(item){
      console.log("delete item for ",item)
      SetTodos(todos.filter((todo)=> todo !== item))
    }
    
  return (
    <div className='formcase'>
      <h1 className='title'>To Do list</h1>
      
      <form onSubmit={handleSubmit} className='form' >
        <input onChange={(e) => SetTodo({name: e.target.value, done:false})} value={todo.name} type="text" className='forminput' placeholder='Enter What you want to add ' />
        <button className='submitBut' type='submit' >Add</button>
      </form>
        <div >
          {todos.map((item)=>(
          <div className='todolist' key={item.name}>
            <h1>{item.name}</h1>
            <span>
          <button onClick={()=>handleDelete(item)} >x</button>
          </span> 
            </div>
        ))}
         
        </div>
    </div>
  )
} 
