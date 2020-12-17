import { ADD_TODO, MARK_TODO_AS_COMPLETED, REMOVE_TODO } from '../actionTypes';

const initialState = {
  todos: [],
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case MARK_TODO_AS_COMPLETED:
      const id = action.payload;
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = true;
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    default:
      return state;
  }
}

export default todosReducer;
