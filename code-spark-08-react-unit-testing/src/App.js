import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Todo from './Components/ToDo/Todo';
import TodoForm from './Components/ToDoForm/TodoForm';

function App() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="app" data-testid="app">
      <div className="todo-list" data-testid="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
        <TodoForm />
        <div
          style={{
            textAlign: 'center',
            margin: 5,
            padding: 5,
            opacity: 0.5,
            fontSize: 12,
          }}
        >
          {moment().format('LT')}
        </div>
      </div>
    </div>
  );
}

export default App;
