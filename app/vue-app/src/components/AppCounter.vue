<script setup lang="ts">
interface Props {
  label?: string;
  count?: number;
  child: {
    blah: string;
  };
}

let blah;

interface Emits {
  (e: 'change'): void;
}

// vue's experimental reactivity transform makes it easier to define default prop values, but it is a bit magic
// this is expected to be stable in the next minor version so it's relatively safe
// const { label = 'Counter', count = 0 } = defineProps<Props>();

// the normal less magic way of doing this would be, but it is a bit clunky
const props = withDefaults(defineProps<Props>(), {
  label: 'Counter',
  count: 0,
});

const emit = defineEmits<Emits>();

emit('change');
</script>

<template>Label: {{ props.label }} Counter: {{ props.count }}</template>

<style scoped></style>
