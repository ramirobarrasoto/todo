import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions'
import './NewTodoForm.css'


const NewTodoForm = ({todos, onCreatePressed}) => {

    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
           <input
                className="new-todo-input"
                type="text"
                placeholder="new task"
                value={inputValue}
                onChange={e =>setInputValue(e.target.value)}        
           />
           <button
            onClick={()=>{
                onCreatePressed(inputValue)
                setInputValue('');
            }}
            >
               Create
           </button>
        </div>

    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToPros = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
})

export default connect(mapStateToProps, mapDispatchToPros)(NewTodoForm);