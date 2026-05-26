<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import recentCard from '@/components/recentCard.vue'
import TeachingsCategory from '@/components/TeachingsCategory.vue'
import { ref } from 'vue'

const deviceWidth = ref(window.screen.width)
</script>

<template>
  <div class="home">
    <HeaderComponent v-if="deviceWidth < 920" />
    <div class="scroll-view">
      <recentCard />
      <TeachingsCategory />
    </div>
  </div>
</template>

<style lang="css" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem;
  background: none;
  gap: 0.3rem;
  overflow: hidden;
}

.scroll-view {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
