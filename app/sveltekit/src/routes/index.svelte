<script lang="ts">
	import Counter from '$lib/components/Counter.svelte';
</script>

<svelte:head>
	<title>Counter</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="counter">
	<Counter label="Counter" />
</div>

<style>
	.counter {
		width: 400px;
		border: 1px black solid;
		padding: 1rem;
		border-radius: 10px;
	}
</style>
