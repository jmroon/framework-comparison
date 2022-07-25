<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Group from '@smui/button/src/Group.svelte';

	export let label = 'Counter';
	export let counter = 0;

	$: doubleCount = counter * 2;

	$: console.log('the count is ' + counter);

	$: doubleCount, console.log('doubleCount changed, do something');
</script>

<div class="counter">
	<h1>{label}</h1>
	<div class="counter-value">
		<h2>{counter}</h2>
	</div>
	<div class="counter-controls">
		<Group>
			<Button variant="unelevated" on:click={() => counter--}>
				<Label>-</Label>
			</Button>
			<Button variant="unelevated" on:click={() => counter++}>
				<Label>+</Label>
			</Button>
		</Group>
	</div>
</div>

<style>
	.counter {
		width: 100%;
	}

	.counter-value {
		display: flex;
		justify-content: center;
		font-size: 20px;
	}

	.counter-controls {
		display: flex;
		justify-content: center;
	}
</style>
