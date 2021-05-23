import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

function TodoList(props) {
    console.log('todolist render')
    return (
        <ul style={styles.ul} >
            { props.todos.map((todo, index) => {
                return (
                    <TodoItem 
                        todo={todo} 
                        key={todo.id} 
                        index={index} 
                        onChange={props.onChange}
                        onClick={props.onClick}
                    />
                )
            }) }
        </ul>
    )
}

export default TodoList