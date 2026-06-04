<script setup lang="ts">
import { setAboutusPanel, setGivePanel } from '@/context/general'
</script>

<template>
  <div class="tab-cnt">
    <div></div>

    <div class="btn-cnt">
      <button @click="() => setGivePanel?.(true)">Give</button>
      <button @click="() => setAboutusPanel?.(true)">About us</button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.tab-cnt {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

@media (min-width: 920px) {
  .tab-cnt {
    width: 80%;
  }
}
.btn-cnt {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-block-start: 1rem;
}

.btn-cnt button {
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  color: rgb(255, 255, 255);
  border: 0.5px solid rgb(1, 35, 34);
  background: none;
}
</style>
