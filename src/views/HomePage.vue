<script setup lang="ts">
import EventsComponent from '@/components/EventsComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import MotoCnt from '@/components/MotoCnt.vue'
import recentCard from '@/components/recentCard.vue'
import TabsCnt from '@/components/TabsCnt.vue'
import TeachingsCategory from '@/components/TeachingsCategory.vue'
import { ref } from 'vue'

const deviceWidth = ref(window.screen.width)
</script>

<template>
  <div class="home">
    <HeaderComponent v-if="deviceWidth < 920" />
    <div class="scroll-view">
      <TabsCnt />
      <recentCard />
      <EventsComponent />
      <TeachingsCategory />
      <MotoCnt />
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
  gap: 2rem;
}
</style>
