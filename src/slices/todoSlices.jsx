import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filter: 'all',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        todoName: action.payload.name,
        todoDesc: action.payload.desc,
        status: 'Not Completed',
      });
    },
    updateStatus: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.status = action.payload.status;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.todoName = action.payload.name;
        todo.todoDesc = action.payload.desc;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, updateStatus, deleteTodo, editTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;