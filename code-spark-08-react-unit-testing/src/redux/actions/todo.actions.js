import { ADD_TODO, MARK_TODO_AS_COMPLETED, REMOVE_TODO } from '../actionTypes';

export function addTodo(todo) {
  return { type: ADD_TODO, payload: todo };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, payload: id };
}

export function markTodoAsCompleted(id) {
  return { type: MARK_TODO_AS_COMPLETED, payload: id };
}
