import { Button, ButtonGroup, Fade, Typography, TypographyProps } from '@mui/material';
import { Box, Container, styled } from '@mui/system';
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  label?: string;
  onCountChanged: (count: number) => void;
}

// we can destructure and set default props here
export const Counter = ({ label = 'Counter', onCountChanged }: CounterProps) => {
  // reactive state - the component will rerender when any of the setters are called
  const [count, setCount] = useState(0);
  const [timesChanged, setTimesChanged] = useState(0);
  const [timeSinceChanged, setTimeSinceChanged] = useState(0);
  const [displayChange, setDisplayChange] = useState(false);

  // since the component will rerun when count is incremented, derived state doesn't need to be stored in component state
  const doubleCount = count * 2;

  // useRef will allow us to keep a mutable reference which doesn't trigger re-renders
  let interval = useRef<number | undefined>(undefined);

  useEffect(() => {
    setTimesChanged((c) => c + 1);
    onCountChanged(count);
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

  useEffect(() => {
    setDisplayChange(true);
    window.setTimeout(() => {
      setDisplayChange(false);
    }, 1000);
  }, [label]);

  return (
    <CounterWrapper>
      <Typography variant="h5">{label}</Typography>
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
      <Typography component="span" pt={4}>
        Message From Parent:
      </Typography>
      {displayChange && (
        <Typography component="span" ml={1}>
          Received!
        </Typography>
      )}
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
