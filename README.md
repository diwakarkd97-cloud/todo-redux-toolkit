React + Redux Toolkit Todo App
A robust, scalable Todo application built with React and Redux Toolkit. This project features full CRUD (Create, Read, Update, Delete) functionality, state-based filtering, and RESTful API integration using Axios and MockAPI.

Features
Global State Management: Utilizes Redux Toolkit (createSlice, configureStore) for predictable state updates without prop drilling.

Full CRUD Operations: Add new tasks, edit existing task details, update completion status, and delete tasks.

Smart Filtering: View all tasks, or filter them specifically by "Completed" or "Not Completed" statuses.

Backend Integration: Configured with Axios to persist data via asynchronous API requests to a MockAPI endpoint.

Tech Stack
Frontend Framework: React (Vite)

State Management: Redux Toolkit & React-Redux

HTTP Client: Axios

Styling: Standard CSS

Folder Structure
Plaintext
src/
├── components/
│   ├── Header.jsx       # Input form for adding new todos
│   ├── Main.jsx         # Renders the filter controls and TodoCard list
│   └── TodoCard.jsx     # Individual todo item with edit/delete/status controls
├── slices/
│   └── todoSlices.jsx   # Redux Toolkit slice containing state and reducers
├── store/
│   └── store.jsx        # Redux store configuration
├── App.jsx              # Root application component (Handles initial API fetch)
├── App.css              # App-level styling
├── main.jsx             # Entry point (Vite setup, Redux Provider, Axios config)
└── index.css            # Global resets and styling
