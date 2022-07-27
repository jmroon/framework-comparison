import { Button, Typography, TypographyProps } from '@mui/material';
import { Box, Container, styled } from '@mui/system';
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  count: number;
  label?: string;
  onIncrement: () => void;
}

// we can destructure and set default props here
export const Counter = ({ count, label = 'Counter', onIncrement }: CounterProps) => {
  // reactive state - the component will rerender when any of the setters are called
  const [timeSinceChanged, setTimeSinceChanged] = useState(0);
  // since the component will rerun when count is incremented, derived state doesn't need to be stored in component state
  const doubleCount = count * 2;

  // useRef will allow us to keep a mutable reference which doesn't trigger re-renders
  let interval = useRef<number | undefined>(undefined);

  // on mounted hook - note runs twice if you're using React.StrictMode
  useEffect(() => {
    interval.current = interval.current ?? createTimer();

    // the return function is the equivalent of an on destroyed hook
    return () => clearInterval(interval.current);
  }, []);

  // eslint is very useful in enforcing the declaration of dependencies on useEffect
  useEffect(() => {
    if (interval.current) {
      setTimeSinceChanged(0);
      clearInterval(interval.current);
      interval.current = createTimer();
    }
  }, [count]);

  function createTimer() {
    return window.setInterval(() => {
      setTimeSinceChanged((t) => t + 1);
    }, 1000);
  }

  function handleIncrement() {
    onIncrement();
  }

  return (
    <CounterWrapper>
      <h3>{label}</h3>
      <CounterContent>
        <CounterValue count={count}>Count: {count}</CounterValue>
        <CounterValue>2x Count: {doubleCount}</CounterValue>
        <CounterValue>Times since last change: {timeSinceChanged}</CounterValue>
        <Button variant="contained" disableElevation onClick={handleIncrement}>
          Increment
        </Button>
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

interface CounterValueProps extends TypographyProps {
  count?: number;
}
// pretty cool that we can programatically control our css, but the syntax is a bit unintuitive
const CounterValue = styled(Typography)<CounterValueProps>(({ count }) => ({
  // fontSize: `${props.count ? 1 + 0.1 * props.count : 1.5}rem`
}));

// this is a React feature that allows setting default props to a reusable component externally from its implementation
CounterValue.defaultProps = {
  variant: 'h6'
};
