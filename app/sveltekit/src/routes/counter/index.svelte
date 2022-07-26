<script lang="ts">
  import Counter from '../../lib/components/Counter.svelte';

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

<svelte:head>
  <title>SvelteKit - Counter</title>
  <meta name="description" content="Svelte Counter Demo" />
</svelte:head>

<div class="counter">
  <h2>Time Since Change: {timeSinceChange} s</h2>
  <Counter label="Counter" on:countChanged={resetTimeSinceChange} />
</div>

<style>
</style>
