import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task && description) {
            addTodo({
                task,
                description
            });
            setTask('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                placeholder="Task Name"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <input
                type="text"
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;
