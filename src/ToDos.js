import React from 'react'
//import ToDoList from './TodoList'

export default function ToDos({todo,toggleTodos}) {
function handleTodoClick(){
    toggleTodos(todo.id)
}

    return (
        <div>
            <label>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            {todo.name}

            </label>
        </div>
    )
}
