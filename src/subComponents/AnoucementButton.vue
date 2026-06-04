<script setup lang="ts">
import { isUnreadCount, isUserLogin, showAnoucement, showLoginPanel } from '@/context/general'
</script>

<template>
  <button @click="() => (isUserLogin ? showAnoucement(true) : showLoginPanel?.(true))">
    <span>Anouce</span>
    <span
      :style="{
        background: 'blue',
        display: isUserLogin && isUnreadCount > 0 ? 'flex' : 'none',
        padding: '.5rem',
        width: '10px',
        height: '10px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4rem',
        flex: '0 0 auto',
      }"
      >{{ isUnreadCount }}</span
    >
  </button>
</template>

<style scoped lang="css">
button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--global-border-cl);
  border-radius: 1rem;
  background: none;
  gap: 0.2rem;
}

button span {
  color: var(--global-txt-cl);
}
</style>
