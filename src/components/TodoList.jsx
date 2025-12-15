import React from 'react'
import TodoItem from './TodoItem'
import '../App.css'
function TodoList({todos, onToggle, onDelete}) {
    return (
        <div className="todo-list">
            {
               todos.length===0?(<p>No todos available</p>) : (todos.map((todo)=>(
                    <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
 
                    />
               )
                )) 
               
            }

        </div>
    )
}
export default TodoList
