import React from 'react'
import ToDo from './ToDos'

export default function ToDoList({todos,toggleTodos}) {
    return (
        todos.map(todo => {
            return <ToDo key={todo.id} toggleTodos={toggleTodos} todo={todo}/>
        })
    )
}
