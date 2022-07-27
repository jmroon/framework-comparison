<script lang="ts">
  import { fade } from 'svelte/transition';
  import Counter from '../../lib/components/Counter.svelte';

  let displayChange = false;

  let timeout: number | undefined;
  function onCountChanged() {
    clearTimeout(timeout);
    displayChange = true;
    timeout = window.setTimeout(() => {
      displayChange = false;
    }, 1000);
  }
</script>

<div class="counter">
  <div class="counter-message">
    {#if displayChange}
      <h2 out:fade={{ duration: 1000 }}>Changed!</h2>
    {/if}
  </div>
  <Counter label="Counter" on:countChanged={onCountChanged} />
</div>

<svelte:head>
  <title>SvelteKit - Counter</title>
  <meta name="description" content="Svelte Counter Demo" />
</svelte:head>

<style>
  .counter {
    border: 1px black solid;
    padding: 1rem;
    border-radius: 10px;
  }

  .counter-message {
    height: 48px;
  }

  h2 {
    margin: 0;
  }
</style>
