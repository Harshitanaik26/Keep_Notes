//import logo from './logo.svg';
//import './App.css';
import React, { useState ,useRef,useEffect} from "react"
import ToDoList from './ToDoList'
//import uuid from 'uuid'
const uuid = require('uuid')
const LOCAL_STORAGE_KEY = 'todoApp.todo'

function App() {
  const [todos,setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(()=>{
    const storeTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storeTodos) setTodos(storeTodos)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

  function toggleTodos(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name===" ") return 
    setTodos(prevTodos=>{
      return[...prevTodos,{id:uuid,name :name,complete:false}]
    })
    todoNameRef.current.value = null
  }

  function handleTodoComplete(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
    <ToDoList todos={todos} toggleTodos={toggleTodos}/>
    <input ref={todoNameRef} type="text"/>
    <button onClick={handleAddTodo}>Add ToDo</button>
    <button onClick={handleTodoComplete}>Clear Task</button>
    <div>{todos.filter(todo => !todo.complete).length} task to complete</div>
    </>
  )
}

export default App;
