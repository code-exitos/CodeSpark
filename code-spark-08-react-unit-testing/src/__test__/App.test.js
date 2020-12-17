import { cleanup, render, screen } from './test.utils';
import App from '../App';

const mockFormat = jest.fn();

jest.mock('moment', () => () => ({
  format: mockFormat,
}));

describe('<App 2/>', () => {
  beforeEach(() => {
    render(<App />, { initialState: { todos: { todos: [] } } });
  });

  afterEach(cleanup);

  it('app should be in the document', () => {
    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
  });

  it('todo-list should be in the document', () => {
    const todoList = screen.getByTestId('todo-list');
    expect(todoList).toBeInTheDocument();
  });

  it('moment() to be called', () => {
    expect(mockFormat).toBeCalled();
  });
});
