import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, updateTodo, deleteTodo, changeStatus, title }) {
    return (
        <div className="todo-list">
            <h2>{title}</h2>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                    changeStatus={changeStatus}
                />
            ))}
        </div>
    );
}

export default TodoList;
