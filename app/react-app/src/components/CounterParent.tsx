import { Button, Fade, styled } from '@mui/material';
import { useState } from 'react';
import { Counter } from './Counter';

export const CounterParent = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((c) => c + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <CounterWrapper>
        <CounterName>Counter Parent</CounterName>
        <Counter count={count} onIncrement={handleIncrement} />
        <Button onClick={reset}>Reset Counter</Button>
      </CounterWrapper>
    </>
  );
};

const CounterName = styled('h3')({
  margin: '0'
});

const CounterWrapper = styled('div')({
  border: '1px black solid',
  padding: '1rem',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
});
