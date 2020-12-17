import { cleanup, render, screen } from './test.utils';
import Todo from '../Components/ToDo/Todo';

const todo = {
  text: 'Obtencion de datos',
  isCompleted: false,
  id: 'uis343',
};

describe('<Todo />', () => {
  beforeEach(() => {
    render(<Todo todo={todo} />, {
      initialState: { todos: { todos: [todo] } },
    });
  });

  afterEach(cleanup);

  it('It should have the same text', () => {
    const text = screen.getByText(/Obtencion de datos/);
    expect(text).toBeInTheDocument();
  });

  it('should have a complete button', () => {
    const completeButton = screen.getByText(/Complete/);
    expect(completeButton).toBeInTheDocument();
  });
});
