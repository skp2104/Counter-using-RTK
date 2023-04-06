// import { useState } from 'react';
import {
  Container,
  Paper,
  Box,
  Typography,
  CssBaseline,
  Button,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementBy,
  decrementBy,
  multiplyBy,
} from './redux/feature/counterSlice';

function App() {
  // const [counter, setCounter] = useState(0);
  // const increment = () => setCounter(counter + 1);
  // const decrement = () => setCounter(counter - 1);
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter.counter;
  });

  const handleIncrementByValue = () => {
    // const action = incrementBy(10);
    // dispatch(action);
    dispatch(incrementBy(10));
  };

  const multiply = () => {
    // const action = incrementBy(10);
    // dispatch(action);
    dispatch(multiplyBy());
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component={Box} py={4}>
        <Paper component={Box} p={3} align='center'>
          <Typography align='center' variant='h1'>
            {counter}
          </Typography>
          <Button onClick={() => dispatch(increment())}>Increment</Button>
          <Button onClick={() => dispatch(decrement())}>Decrement</Button>
          <Button onClick={handleIncrementByValue}>Increment By 10</Button>
          <Button onClick={() => dispatch(decrementBy(10))}>
            Decrement By 10
          </Button>
          <Button onClick={() => multiply()}>Multiple By</Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
