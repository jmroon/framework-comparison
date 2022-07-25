<script lang="ts">
	import { todos, addTodo, completeTodo } from '$lib/stores/todo-store';
	import Button, { Label } from '@smui/button';
	import TextField from '@smui/textfield';
	import { createEventDispatcher } from 'svelte';

	let addText = '';

	const dispatch = createEventDispatcher<{ add: string }>();

	function onAdd() {
		if (addText.length > 0) {
			dispatch('add', addText);
			addText = '';
		}
	}
</script>

<div class="todo-add">
	<div class="text-field">
		<TextField style="width: 100%" variant="outlined" bind:value={addText} label="Todo" />
	</div>
	<Button on:click={onAdd}><Label>Add</Label></Button>
</div>

<style>
	.todo-add {
		display: flex;
		gap: 1rem;
	}

	.text-field {
		flex-grow: 1;
	}
</style>
