<script setup lang="ts">
import Counter from 'components/AppCounter.vue';

let count = ref(0);

function incrementLabel() {}
</script>

<template>
  Counter page!
  <Counter></Counter>
  <q-btn @click="incrementLabel()"></q-btn>
</template>

<style scoped></style>
