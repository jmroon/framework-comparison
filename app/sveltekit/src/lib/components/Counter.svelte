<script lang="ts">
  import Button, { Label, Group } from '@smui/button';

  export let label = 'Counter';
  export let count = 0;

  $: doubleCount = count * 2;

  let countChanged = 0;
  $: count, countChanged++;

  let timeSinceChange = 0;
  $: {
    count;
    timeSinceChange = 0;
  }

  setInterval(() => {
    timeSinceChange++;
  }, 1000);
</script>

<div class="counter-wrapper">
  <h1>{label}</h1>
  <div class="counter-content">
    <h2>Count: {count}</h2>
    <h2>2x Count: {doubleCount}</h2>
    <h2>Count changed: {countChanged}</h2>
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
