import { Fade, styled } from '@mui/material';
import { useState } from 'react';
import { Counter } from '../components/Counter';

export const CounterPage = () => {
  const [displayChange, setDisplayChange] = useState(false);

  let timeout: number | undefined;
  function onCountChanged() {
    console.log('change');
    clearTimeout(timeout);
    setDisplayChange(true);
    timeout = window.setTimeout(() => {
      setDisplayChange(false);
    }, 1000);
  }

  return (
    <CounterWrapper>
      <CounterMessageWrapper>
        <Fade in={displayChange} easing={{ enter: 'steps(1, jump-start)' }} timeout={1000}>
          <CounterMessage>Changed!</CounterMessage>
        </Fade>
      </CounterMessageWrapper>
      <Counter onCountChanged={onCountChanged} />
    </CounterWrapper>
  );
};

const CounterMessageWrapper = styled('div')({
  height: '48px'
});

const CounterMessage = styled('h2')({
  margin: '0'
});

const CounterWrapper = styled('div')({
  border: '1px black solid',
  padding: '1rem',
  borderRadius: '10px'
});
