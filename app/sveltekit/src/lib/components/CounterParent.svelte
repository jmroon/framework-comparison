<script lang="ts">
  import Button, { Label } from '@smui/button';
  import Counter from '../../lib/components/Counter.svelte';

  let count = 0;

  function handleIncrement() {
    count++;
  }

  function handleReset() {
    count = 0;
  }
</script>

<div class="counter-container">
  <h2>Counter Parent</h2>
  <Counter {count} on:increment={handleIncrement} />
  <Button on:click={handleReset}><Label>Reset Counter</Label></Button>
</div>

<style>
  .counter-container {
    border: 1px black solid;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2 {
    margin: 0;
  }
</style>
