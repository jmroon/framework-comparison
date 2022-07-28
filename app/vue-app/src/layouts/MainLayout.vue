<script setup lang="ts"></script>

<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Vue - Quasar</q-toolbar-title>
        <q-btn flat to="/counter">Counter</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
