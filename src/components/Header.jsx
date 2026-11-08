import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlices';

const Header = () => {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

  const handleSubmit = () => {
    if (!todoName.trim()) return;

    dispatch(addTodo({ name: todoName, desc: todoDesc }));

    setTodoName("");
    setTodoDesc("");
  };

  return (
    <div className='header'>
      <input
        placeholder='Todo Name'
        value={todoName}
        type="text"
        onChange={(e) => setTodoName(e.target.value)}
      />
      <input
        placeholder='Todo Description'
        value={todoDesc}
        type="text"
        onChange={(e) => setTodoDesc(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default Header;