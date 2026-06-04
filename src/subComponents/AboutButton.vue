<script setup lang="ts">
import { setAboutusPanel } from '@/context/general'
</script>

<template>
  <button @click="() => setAboutusPanel?.(true)">About us</button>
</template>

<style lang="css" scoped>
button {
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  color: rgb(255, 255, 255);
  border: 0.5px solid rgb(1, 35, 34);
  background: none;
}
</style>
