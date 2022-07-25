<script lang="ts">
	import TodoActions from './TodoActions.svelte';

	import { todos, addTodo, completeTodo } from '$lib/stores/todo-store';
	import Todo from '$lib/components/Todo.svelte';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Todos</title>
	<meta name="description" content="A todo list app" />
</svelte:head>

<div class="todos">
	<h1>Todos</h1>
	<div>
		{#each $todos as todo}
			<div in:fly|local={{ x: 200, duration: 500 }}>
				<Todo {todo} on:complete={() => completeTodo(todo.id)} />
			</div>
		{/each}
	</div>
	<TodoActions on:add={(event) => addTodo(event.detail)} />
</div>

<style>
	.todos {
		width: 400px;
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
		gap: 1rem;
	}
</style>
