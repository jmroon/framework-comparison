<script setup lang="ts">
  import Counter from 'src/components/Counter.vue';

  const count = ref(0);

  function handleIncrement() {
    count.value++;
  }

  function handleReset() {
    count.value = 0;
  }
</script>

<template>
  <div class="counter-container rounded-borders">
    <h5 class="q-my-none">Counter Parent</h5>
    <Counter :count="count" @increment="handleIncrement"></Counter>
    <q-btn unelevated @click="handleReset">Reset Counter</q-btn>
  </div>
</template>

<style scoped>
  .counter-container {
    border: 1px black solid;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
