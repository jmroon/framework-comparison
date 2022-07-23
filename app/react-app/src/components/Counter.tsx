import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

export const Counter = () => {
	const [count, setCount] = useState(0);
	const [doubleCount, setDoubleCount] = useState(0);

	useEffect(() => {
		console.log('count changed');
	}, [count]);

	useEffect(() => {
		setDoubleCount(count * 2);
	}, [count]);

	return (
		<div>
			<p>You clicked {count} times</p>
			<Button variant="contained" onClick={() => setCount(count + 1)}>
				Click me
			</Button>
		</div>
	);
};
