import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, updateStatus, deleteTodo } from '../slices/todoSlices';

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  
  const [todoName, setTodoName] = useState(todo.todoName);
  const [todoDesc, setTodoDesc] = useState(todo.todoDesc);
  const [isEdit, setIsEdit] = useState(false);

  const handleUpdate = () => {
    dispatch(editTodo({ id: todo.id, name: todoName, desc: todoDesc }));
    setIsEdit(false);
  };

  const handleStatusChange = (e) => {
    dispatch(updateStatus({ id: todo.id, status: e.target.value }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    <div className='todo-card'>
      {isEdit ? (
        <>
          <h3>Name:</h3>
          <input
            type="text"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <p>Description:</p>
          <input
            type="text"
            value={todoDesc}
            onChange={(e) => setTodoDesc(e.target.value)}
          />
        </>
      ) : (
        <>
          <h3>Name: {todo.todoName}</h3>
          <p>Description: {todo.todoDesc}</p>
        </>
      )}

      <div>
        <label htmlFor={`status-${todo.id}`}>Status:</label>
        <select 
          id={`status-${todo.id}`}
          value={todo.status} 
          onChange={handleStatusChange}
        >
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>

      {isEdit ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={() => setIsEdit(true)}>Edit</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoCard;