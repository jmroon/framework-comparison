import { Button, ButtonGroup, Typography } from '@mui/material';
import { Box, Container, styled } from '@mui/system';
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  onCountChanged: () => unknown;
}

export const Counter = ({ onCountChanged }: CounterProps) => {
  // reactive state - the component will rerender when any of the setters are called
  const [count, setCount] = useState(0);
  const [timesChanged, setTimesChanged] = useState(0);
  const [timeSinceChanged, setTimeSinceChanged] = useState(0);

  // since the component will rerun when count is incremented, derived state doesn't need to be stored in component state
  const doubleCount = count * 2;

  // useRef will allow us to keep a mutable reference which doesn't trigger re-renders
  let interval = useRef<number | undefined>(undefined);

  useEffect(() => {
    setTimesChanged((c) => c + 1);
    onCountChanged();
    if (interval.current) {
      resetTimeSinceChange();
    }
  }, [count]);

  // on mounted hook - note runs twice if you're using React.StrictMode
  useEffect(() => {
    interval.current = interval.current ?? createTimer();

    // the return function is the equivalent of an on destroyed hook
    return () => clearInterval(interval.current);
  }, []);

  function resetTimeSinceChange() {
    setTimeSinceChanged(0);
    clearInterval(interval.current);
    interval.current = createTimer();
  }

  function createTimer() {
    return window.setInterval(() => {
      setTimeSinceChanged((t) => t + 1);
    }, 1000);
  }

  return (
    <CounterWrapper>
      <Typography variant="h4">Counter</Typography>
      <CounterContent>
        <CounterValue count={count}>Count: {count}</CounterValue>
        <CounterValue>2x Count: {doubleCount}</CounterValue>
        <CounterValue>Times count changed: {timesChanged}</CounterValue>
        <CounterValue>Times since last change: {timeSinceChanged}</CounterValue>
        <ButtonGroup disableElevation variant="contained">
          <Button disabled={count === 0} onClick={() => setCount(count - 1)}>
            -
          </Button>
          <Button onClick={() => setCount(count + 1)}>+</Button>
        </ButtonGroup>
      </CounterContent>
    </CounterWrapper>
  );
};

// this is another way of using css in js. An HTMLElement or Material UI component can be reused and shared with specific styling
// it also makes the template quite clean and declarative
const CounterWrapper = styled(Box)(() => ({
  width: '400px',
  border: '1px black solid',
  borderRadius: '10px',
  padding: '1rem'
}));

const CounterContent = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

// pretty cool that we can programatically control our css
const CounterValue = styled(Typography)((props: { count?: number }) => ({
  fontSize: '1.5rem'
  // fontSize: `${props.count ? 1 + 0.1 * props.count : 1.5}rem`
}));
