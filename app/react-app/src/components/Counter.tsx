import { Button, ButtonGroup, Typography } from '@mui/material';
import { Box, Container, styled } from '@mui/system';
import { useEffect, useState } from 'react';

export const Counter = () => {
	const [count, setCount] = useState(0);
	const [doubleCount, setDoubleCount] = useState(0);
	const [countChanged, setCountChanged] = useState(0);

	useEffect(() => {
		setCountChanged(countChanged + 1);
	}, [count]);

	useEffect(() => {
		setDoubleCount(count * 2);
	}, [count]);

	return (
		<CounterWrapper>
			<Typography variant="h4">Counter</Typography>
			<CounterContent>
				<CounterValue count={count}>Count: {count}</CounterValue>
				<CounterValue>2x Count: {doubleCount}</CounterValue>
				<CounterValue>Times count changed: {countChanged}</CounterValue>
				<ButtonGroup disableElevation variant="contained">
					<Button onClick={() => setCount(count - 1)}>-</Button>
					<Button onClick={() => setCount(count + 1)}>+</Button>
				</ButtonGroup>
			</CounterContent>
		</CounterWrapper>
	);
};

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

const CounterValue = styled(Typography)((props: { count?: number }) => ({
	fontSize: '1.5rem'
	// fontSize: `${props.count ? 1 + 0.1 * props.count : 1.5}rem`
}));
