import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Filter from './Filter';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('All');

    const addTodo = (todo) => {
        setTodos([...todos, { ...todo, id: Date.now(), status: 'Not Completed' }]);
    };

    const updateTodo = (id, updatedTodo) => {
        setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const changeStatus = (id, status) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, status } : todo)));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'All') return true;
        return todo.status === filter;
    });

    const completedTodos = todos.filter(todo => todo.status === 'Completed');
    const notCompletedTodos = todos.filter(todo => todo.status === 'Not Completed');

    return (
        <div className="todo-app">
            <h1>My Todo</h1>
            <TodoForm addTodo={addTodo} />
            <Filter setFilter={setFilter} />
            <div className="todo-lists">
                <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} changeStatus={changeStatus} title="All Todos" />
                <TodoList todos={completedTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} changeStatus={changeStatus} title="Completed Todos" />
                <TodoList todos={notCompletedTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} changeStatus={changeStatus} title="Not Completed Todos" />
            </div>
        </div>
    );
}

export default TodoApp;
