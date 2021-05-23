import React from 'react'
import PropTypes, { func } from 'prop-types'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem', 
    },
    input: {
        marginRight: '.5rem',
    }
}

function TodoItem( { todo, index, onChange, onClick } ) {
    console.log('todo ITEM render')
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input 
                    type='checkbox' 
                    checked={todo.completed}
                    style={styles.input} 
                    onChange={() => onChange(todo.id)}
                />
                <strong> {index + 1} </strong>
                &nbsp;
                {todo.title}
            </span>
            <button className="rm" onClick={() => onClick(todo.id)}>&times;</button>
        </li>
    )
}

export default TodoItem