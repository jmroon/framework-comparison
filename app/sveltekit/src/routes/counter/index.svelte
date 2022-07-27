<script lang="ts">
  import Button, { Label } from '@smui/button';
  import { fade } from 'svelte/transition';
  import Counter from '../../lib/components/Counter.svelte';

  let count = 0;
  $: label = `Counter ${count}`;

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
    <h2>Message from Parent:</h2>
    {#if displayChange}
      <h2 out:fade={{ duration: 1000 }}>Changed!</h2>
    {/if}
  </div>
  <Counter {label} on:countChanged={onCountChanged} />
  <Button on:click={() => count++}><Label>Increment Counter Label</Label></Button>
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
    display: flex;
    gap: 1rem;
  }

  h2 {
    margin: 0;
  }
</style>
