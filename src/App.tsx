import { useDispatch, useSelector } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import { RootState } from './store/store';
import { decrement, decrementByAmount, increment, incrementByAmount } from './store/slices/counter';

const App = () => {
  const { counter } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

        <h5>Count is: {counter}</h5>

        <ButtonGroup>
          <Button variant='primary me-2' onClick={() => dispatch(increment())}>
            Increment
          </Button>

          <Button variant='primary me-2' onClick={() => dispatch(decrement())}>
            Decrement
          </Button>

          <Button variant='primary me-2' onClick={() => dispatch(incrementByAmount(10))}>
            Increment by 10
          </Button>

          <Button variant='primary' onClick={() => dispatch(decrementByAmount(10))}>
            Decrement by 10
          </Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
