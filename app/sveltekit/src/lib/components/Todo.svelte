<script lang="ts">
  import type { Todo } from '$lib/stores/todo-store';
  import { createEventDispatcher } from 'svelte';
  import { Item, Label, Meta } from '@smui/list/';
  import Checkbox from '@smui/checkbox';

  const dispatch = createEventDispatcher<{ complete: string }>();

  export let todo: Todo;
</script>

<div class:completed={todo.completed}>
  <Item on:click={() => dispatch('complete')}>
    <Label>{todo.title}</Label>
    <Meta>
      <Checkbox checked={todo.completed} />
    </Meta>
  </Item>
</div>

<style>
  .completed {
    background-color: rgba(0, 0, 255, 0.05);
    text-decoration: line-through;
  }
</style>
