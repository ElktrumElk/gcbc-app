<script setup lang="ts">
import { showSetting } from '@/context/general'
</script>

<template>
  <button class="setting-button" @click="() => showSetting?.(true)">
    <img
      src="https://img.icons8.com/?size=100&id=364&format=png&color=7a7a7a"
      width="30px"
      height="30px"
    />
  </button>
</template>

<style scoped lang="css">
.setting-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border: none;
  background: none;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.4s ease;
}

.setting-button:active {
  transform: scale(0.9);
}
</style>
