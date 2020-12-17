import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../redux/actions/todo.actions';
import './TodoForm.css';

function TodoForm() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    const todo = {
      id: uuidv4(),
      text: value,
      isCompleted: false,
    };
    dispatch(addTodo(todo));
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} data-testid="todo-form">
      <input
        type="text"
        className="input"
        data-testid="input-form"
        value={value}
        placeholder="Add new todo..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
