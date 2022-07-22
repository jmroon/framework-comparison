<script lang="ts">
	export let counter = 0;

	$: doubleCount = counter * 2;

	$: console.log('the count is ' + counter);

	$: doubleCount, console.log('doubleCount changed, do something');

	function increment() {
		counter++;
	}

	function decrement() {
		counter--;
	}
</script>

<div class="counter">
	<h1>Counter</h1>
	<div class="counter-container">
		<div class="counter-value">
			<span>{counter}</span>
		</div>
		<div class="counter-controls">
			<button on:click={increment}>+</button>
			<button on:click={decrement}>-</button>
		</div>
	</div>
</div>

<style>
	.counter {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.counter-value {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: x-large;
		font-weight: bold;
		color: darkslategrey;
	}

	button {
		padding: 8px;
		border-radius: 999px;
	}
</style>
