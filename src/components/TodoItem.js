import React, { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo, changeStatus }) {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.task);
    const [description, setDescription] = useState(todo.description);

    const handleUpdate = () => {
        updateTodo(todo.id, { ...todo, task, description });
        setIsEditing(false);
    };

    return (
        <div className="todo-item">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        className="input-task"
                    />
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="input-description"
                    />
                    <button onClick={handleUpdate} className="btn-save">Save</button>
                </>
            ) : (
                <>
                    <h3>{todo.task}</h3>
                    <p>{todo.description}</p>
                    <select
                        value={todo.status}
                        onChange={(e) => changeStatus(todo.id, e.target.value)}
                        className="status-dropdown"
                    >
                        <option value="Not Completed">Not Completed</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <div>
                        <button onClick={() => setIsEditing(true)} className="btn-edit">Edit</button>
                        <button onClick={() => deleteTodo(todo.id)} className="btn-delete">Delete</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default TodoItem;
