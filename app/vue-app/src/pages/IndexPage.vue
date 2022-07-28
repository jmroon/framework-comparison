<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();

  router.push('/counter');
</script>

<template>
  <q-page class="row items-center justify-evenly">
    Hello from index!!!!
  </q-page>
</template>
