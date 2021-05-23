import React, { useState } from 'react'
import TodoList from './Todo/TodoList'

function App() {

  console.log('app render')

  const [todos, setTodos] = useState([
    {id: 1, comleted: false, title: 'Купить молоко'},
    {id: 2, comleted: false, title: 'Купить хлеб'},
    {id: 3, comleted: false, title: 'Купить масло'},  
  ])

  function onTodoItemChange(id) {
    const newTodos = todos.map(todoItem => {
      if (todoItem.id === id) {
        todoItem.completed = !todoItem.completed
        return todoItem
      }
      return todoItem
    })

    setTodos(newTodos)
  }

  function onTodoDelete(id) {
    const newTodos = todos.filter(todoItem => todoItem.id != id)

    setTodos(newTodos)
  }

  return (
    <>
      <div className='wrapper'>
        <h1>List of something</h1>
        <TodoList todos={todos} onChange={(id) => onTodoItemChange(id)} onClick={onTodoDelete} />  
      </div>
    </>
  )

}

export default App;
