import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoCard from './TodoCard';
import { setFilter } from '../slices/todoSlices';

const Main = () => {
  const dispatch = useDispatch();
  
  // Extract todos and filter string from the Redux store
  const { todos, filter } = useSelector((state) => state.todo);

  // Apply the filter logic locally before rendering
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    return todo.status === filter;
  });

  return (
    <div className='main'>
      <div className='top-bar'>
        <h2>My Todos</h2>
        <div>
          <label htmlFor="filter-select">Status Filter:</label>
          <select
            id="filter-select"
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value))}
          >
            <option value="all">All</option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
          </select>
        </div>
      </div>

      {filteredTodos.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>Welcome to Todo App!</h1>
      ) : (
        <div className='todo-container'>
          {filteredTodos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;