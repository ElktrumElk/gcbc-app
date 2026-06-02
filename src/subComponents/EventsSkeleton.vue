<script lang="ts" setup>
const skeleton = [1, 2, 3, 4]
</script>
<template>
  <div class="event-cnt">
    <div class="scroll-view">
      <div
        class="skeleton-animation-1"
        :style="{
          width: '80%',
          maxWidth: '400px',
          height: '17rem',
          borderRadius: '1rem',
          flex: '0 0 auto',
        }"
        v-for="(skel, idx) in skeleton"
        :key="idx"
      ></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.event-cnt {
  width: 100%;
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  gap: 1rem;
}
.scroll-view {
  display: flex;
  align-items: center;
  overflow-x: auto;
  gap: 0.5rem;
  overflow-y: hidden;
}
</style>
