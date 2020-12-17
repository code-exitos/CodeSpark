import { cleanup, render, screen, fireEvent } from './test.utils';
import TodoForm from '../componets/ToDoForm/TodoForm';
import { ADD_TODO } from '../redux/actionTypes';
import { addTodo } from '../redux/actions/todo.actions';
import todosReducer from '../redux/reducers/todos.reducer';

const mockAddTodo = jest.fn();
describe('<Todo Form />', () => {
  beforeEach(() => {
    render(<TodoForm />, {
      initialState: { todos: { todos: [] } },
    });
  });

  afterEach(cleanup);

  it('Input should be in the document', () => {
    const input = screen.getByTestId('input-form');
    expect(input).toBeInTheDocument();
  });

  it('when type something in the input the value should be the same', () => {
    const input = screen.getByTestId('input-form');
    const expectedValue = 'hola';
    fireEvent.change(input, { target: { value: 'hola' } });
    expect(input).toHaveValue(expectedValue);
  });

  // it('should add new todo to the list', () => {
  //   const form = screen.getByTestId('input-form');
  //   expect(form).toBeInTheDocument();

  //   const input = screen.getByTestId('input-form');
  //   fireEvent.change(input, { target: { value: 'hola mundo' } });

  //   fireEvent.submit(form);
  //   expect(mockAddTodo).toBeCalled();
  //   expect(mockAddTodo).toBeCalledWith('hola mundo');
  // });
});

describe('<Todo Form /> Redux test', () => {
  beforeEach(() => {
    render(<TodoForm />, {
      initialState: { todos: { todos: [] } },
    });
  });

  afterEach(cleanup);

  it('should create an action to add a todo', () => {
    const newTodo = { id: 'uisdu34', text: 'Go shopping', isCompleted: false };
    const expectedAction = { type: ADD_TODO, payload: newTodo };
    expect(addTodo(newTodo)).toEqual(expectedAction);
  });

  it('should return initial state', () => {
    const expectState = { todos: [] };
    expect(todosReducer(undefined, {})).toEqual(expectState);
  });

  it('should handle ADD_TODO', () => {
    const newTodo = { id: 'dsd343', text: 'Go Shopping', isCompleted: false };
    const expectedSate = { todos: [newTodo] };
    expect(
      todosReducer(undefined, { type: ADD_TODO, payload: newTodo })
    ).toEqual(expectedSate);
  });
});
