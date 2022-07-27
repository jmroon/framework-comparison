<script lang="ts">
  import Button, { Label, Group } from '@smui/button';
  import { createEventDispatcher } from 'svelte';

  // input properties
  export let label = 'Counter';
  export let count = 0;

  // output events
  const dispatch = createEventDispatcher<{ countChanged: void }>();

  // reactive declaration
  $: doubleCount = count * 2;

  // variables are reactive by default
  let countChanged = 0;

  // reactive side effect, the dependency can just be in an empty statement if unused
  $: {
    count;
    countChanged++;
    resetTimeSinceChange();
    dispatch('countChanged');
  }

  let timeSinceChange = 0;
  let interval = createTimer();

  function resetTimeSinceChange() {
    timeSinceChange = 0;
    clearInterval(interval);
    interval = createTimer();
  }

  function createTimer() {
    return setInterval(() => {
      timeSinceChange++;
    }, 1000);
  }
</script>

<div class="counter-wrapper">
  <h1>{label}</h1>
  <div class="counter-content">
    <h2>Count: {count}</h2>
    <h2>2x Count: {doubleCount}</h2>
    <h2>Times changed: {countChanged}</h2>
    <h2>Time since change: {timeSinceChange}</h2>
    <Group>
      <Button variant="unelevated" disabled={count === 0} on:click={() => count--}>
        <Label>-</Label>
      </Button>
      <Button variant="unelevated" on:click={() => count++}>
        <Label>+</Label>
      </Button>
    </Group>
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
  }
</style>
