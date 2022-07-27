<svelte:options immutable={true} />

<script lang="ts">
  import Button, { Label } from '@smui/button';
  import { createEventDispatcher } from 'svelte';

  // input props are declared using export let
  // if props are not given a value, they will be considered required
  export let label = 'Counter';
  export let count: number;

  // output events
  const dispatch = createEventDispatcher<{ increment: void; decrement: void }>();

  // reactive declaration
  $: doubleCount = count * 2;

  // variables are reactive, but they must be reassigned to update the DOM
  let timeSinceChange = 0;

  // reactive side effect, the dependency can just be in an empty statement if unused
  $: {
    count;
    resetTimeSinceChange();
  }

  // asynchronous state changes work as expected
  let interval = createTimer();
  function resetTimeSinceChange() {
    timeSinceChange = 0;
    clearInterval(interval);
    interval = createTimer();
  }

  function createTimer() {
    return window.setInterval(() => {
      timeSinceChange++;
    }, 1000);
  }

  function handleIncrement() {
    dispatch('increment');
  }
</script>

<div class="counter-wrapper">
  <h2>{label}</h2>
  <div class="counter-content">
    <h2>Count: {count}</h2>
    <h2>2x Count: {doubleCount}</h2>
    <h2>Time since change: {timeSinceChange}</h2>
    <Button variant="unelevated" on:click={handleIncrement}>
      <Label>Increment</Label>
    </Button>
  </div>
</div>

<style>
  .counter-wrapper {
    width: 400px;
    border: 1px black solid;
    border-radius: 10px;
    padding: 1rem;
  }

  .counter-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  h2 {
    margin: 0;
  }
</style>
