import { Button, Fade, styled } from '@mui/material';
import { useState } from 'react';
import { Counter } from '../components/Counter';

export const CounterPage = () => {
  const [displayChange, setDisplayChange] = useState(false);
  const [counterNumber, setCounterNumber] = useState(0);

  function onCountChanged() {
    setDisplayChange(true);
    window.setTimeout(() => {
      setDisplayChange(false);
    }, 1000);
  }

  return (
    <>
      <CounterWrapper>
        <CounterMessageWrapper>
          <CounterMessage>Message from child:</CounterMessage>
          <Fade in={displayChange} timeout={{ enter: 0, exit: 1000 }}>
            <CounterMessage>Received!</CounterMessage>
          </Fade>
        </CounterMessageWrapper>
        <Counter label={`Counter ${counterNumber}`} onCountChanged={onCountChanged} />
        <Button onClick={() => setCounterNumber((c) => c + 1)}>Increment Counter Name</Button>
      </CounterWrapper>
    </>
  );
};

const CounterMessageWrapper = styled('div')({
  height: '48px',
  display: 'flex',
  gap: '1rem'
});

const CounterMessage = styled('h3')({
  margin: '0'
});

const CounterWrapper = styled('div')({
  border: '1px black solid',
  padding: '1rem',
  borderRadius: '10px'
});
