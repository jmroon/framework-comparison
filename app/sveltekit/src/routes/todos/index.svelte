<script context="module" lang="ts">
	export async function load() {
		console.log('We could load todos from the server here and pass them into our component. SSR made easy :)');
	}
</script>

<script>
	import TodoList from '$lib/components/TodoList.svelte';
</script>

<svelte:head>
	<title>SvelteKit - Todos</title>
	<meta name="description" content="Svelte Todo Demo" />
</svelte:head>

<TodoList />
