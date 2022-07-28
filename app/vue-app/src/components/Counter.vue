<script setup lang="ts">
  interface Props {
    label?: string;
    count: number;
  }

  interface Emits {
    (e: 'increment'): void;
  }

  // define props assigns input props, and we can assign defaults using withDefaults
  const props = withDefaults(defineProps<Props>(), {
    label: 'Counter',
  });

  // the vue reactivity transform has a nicer way of doing this, but it is still experimental (although reportedly fairly stable now)
  // const { label = 'Counter', count } = defineProps<Props>();

  const timeSinceChange = ref(0);

  const emit = defineEmits<Emits>();

  const doubleCount = computed(() => props.count * 2);

  watch(
    () => props.count,
    () => resetTimeSinceChange()
  );

  let interval = createTimer();
  function resetTimeSinceChange() {
    timeSinceChange.value = 0;
    clearInterval(interval);
    interval = createTimer();
  }

  function createTimer() {
    return window.setInterval(() => {
      timeSinceChange.value++;
    }, 1000);
  }

  function handleIncrement() {
    emit('increment');
  }
</script>

<template>
  <div class="counter-wrapper">
    <h5>{{ label }}</h5>
    <div class="counter-content">
      <h5>Count: {{ count }}</h5>
      <h5>2x Count: {{ doubleCount }}</h5>
      <h5>Time since change: {{ timeSinceChange }}</h5>
      <q-btn color="primary" unelevated @click="handleIncrement()"
        >Increment</q-btn
      >
    </div>
  </div>
</template>

<style scoped>
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

  h5 {
    margin: 0;
  }
</style>
