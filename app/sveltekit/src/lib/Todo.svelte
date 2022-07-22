<script lang="ts">
	import type { Todo } from '$lib/stores/todo-store';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let todo: Todo;
</script>

<div class="todo">
	{todo.title}
	<input type="checkbox" checked={todo.completed} on:click={() => dispatch('complete')} />
</div>

<style>
	.todo {
		display: flex;
		width: 400px;
	}
</style>
