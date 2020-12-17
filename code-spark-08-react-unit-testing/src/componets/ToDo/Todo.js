import React from 'react';
import { useDispatch } from 'react-redux';
import {
  markTodoAsCompleted,
  removeTodo,
} from '../../redux/actions/todo.actions';
import './Todo.css';

function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <div
      className="todo"
      style={{
        textDecoration: todo.isCompleted ? 'line-through' : '',
      }}
      data-testid="todo"
    >
      {todo.text}
      <div>
        <button
          onClick={() => dispatch(markTodoAsCompleted(todo.id))}
          data-testid="complete-button"
        >
          Complete
        </button>
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          data-testid="remove-todo"
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Todo;
