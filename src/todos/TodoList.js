import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { removeTodo } from './actions';
import './TodoList.css';


const TodoList = ({ todos = [], onRemovePressed} ) => {

    return (
        <div className="list-wrapper">
            <h2>TO-DO LIST</h2>
            <NewTodoForm />
                {todos.map(todo => 
                <TodoListItem
                    todo={todo} 
                    onRemovePressed={onRemovePressed}
                />
        )}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed : text => dispatch(removeTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);