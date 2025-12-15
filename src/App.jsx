import React, {  useState } from 'react'
import TodoList from './components/TodoList'
import './App.css'
function App() {
  const [todos,setTodos]= useState([
    
  ])
  const[newTodo,setNewTodo]=useState("")

  const addTodo=()=>{
    if(!newTodo.trim())
      return
    const todo = {
      id:Date.now(),
      text:newTodo,
      completed:false
    }
    setTodos([...todos,todo])
    setNewTodo("")
  }

  const toggleTodo = (id)=>{
    setTodos(
      todos.map((todo)=>
      todo.id===id?{...todo,completed:!todo.completed}:todo
      )
    )
  }

  const deleteTodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id !==id))
  }
  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <div className="input-container">
       <input type="text"
       placeholder='Enter Todo'
       value={newTodo}
       onChange={(e)=>setNewTodo(e.target.value)}
        />      
        <button onClick={addTodo}>Add</button>
</div>
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        
    </div>
  )
}

export default App
