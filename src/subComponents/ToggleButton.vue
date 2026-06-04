<script setup lang="ts">
interface prop {
  isClick?: CallableFunction
  mode?: boolean
}
defineProps<prop>()
</script>

<template>
  <div
    @click="() => isClick?.()"
    class="color-toggle"
    :style="{
      alignItems: mode ? 'flex-end' : 'flex-start',
      background: mode ? '#04c7ea7d' : 'none',
      transition: 'background .2s ease',
    }"
  >
    <div class="toggle-ctr" :style="{ background: mode ? '#000' : '#fff' }"></div>
  </div>
</template>

<style scoped lang="css">
.color-toggle {
  display: flex;
  flex-direction: column;
  width: 3rem;
  padding: 0.3rem;
  border-radius: 3rem;
  border: var(--global-border-cl);
  cursor: pointer;
}
.toggle-ctr {
  width: 1rem;
  height: 1rem;
  border-radius: 4rem;
  background: rgb(255, 255, 255);
}
</style>
