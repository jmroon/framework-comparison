<script context="module" lang="ts">
	export async function load() {
		console.log(
			'We could load todos from the server here and pass them into our component. SSR yay :)'
		);
	}
</script>

<script lang="ts">
	import { todos, addTodo, completeTodo } from '$lib/stores/todo-store';
	import Todo from '$lib/Todo.svelte';
	import { fly } from 'svelte/transition';

	let addText = '';

	function onAdd() {
		if (addText.length > 0) {
			addTodo(addText);
			addText = '';
		}
	}
</script>

<svelte:head>
	<title>Todos</title>
	<meta name="description" content="A todo list app" />
</svelte:head>

<div class="todos">
	<h1>Todos</h1>
	{#each $todos as todo}
		<div in:fly={{ x: 200, duration: 500 }} class="todo" class:completed={todo.completed}>
			<Todo
				{todo}
				on:complete={() => {
					completeTodo(todo.id);
				}}
			/>
		</div>
	{/each}
	<div class="todo-add">
		<input type="text" placeholder="Add a todo" bind:value={addText} />
		<button on:click={onAdd}>Add</button>
	</div>
</div>

<style>
	.todos {
		width: 400px;
	}
	.completed {
		background-color: yellow;
		border: 1px red solid;
	}
</style>
