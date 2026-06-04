<script setup lang="ts">
import { showSetting } from '@/context/general'
</script>

<template>
  <button class="setting-button" @click="() => showSetting?.(true)">
    <img
      src="https://img.icons8.com/?size=100&id=364&format=png&color=7a7a7a"
      width="20px"
      height="20px"
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
  background-color: rgba(80, 79, 79, 0);
  backdrop-filter: blur(10px);
  box-shadow:
    0 0px 0rem 0rem gray,
    inset 0px 0px 0.4rem rgba(129, 129, 129, 0.535);
  border-radius: 4rem;
  color: #eeeeee;
}

.setting-button:active {
  transform: scale(0.9);
}
</style>
