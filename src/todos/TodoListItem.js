import React from 'react';
import './TodoListItem.css'


const TodoListItem = ({ todo, onRemovePressed }) => {
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                <button 
                    onClick={() => onRemovePressed(todo.text)}
                    className="remove-button">Remove</button>                              
            </div>
        </div>
    )


}


export default TodoListItem