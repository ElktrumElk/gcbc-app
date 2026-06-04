<script setup lang="ts">
import { isUserLogin, showLoginPanel } from '@/context/general'
import { avatarInitial, setUserProfile } from '@/context/userProfile'
import type { CSSProperties } from 'vue'

interface profile {
  width?: string
  height?: string
  color?: string
  background?: string
  styles?: CSSProperties
}
defineProps<profile>()
</script>

<template>
  <div
    :style="{
      width: width,
      color: color,
      background: background,
      height: height,
      ...(styles as CSSProperties),
    }"
    class="profile-img"
    @click="
      () => {
        isUserLogin ? setUserProfile?.(true) : showLoginPanel?.(true)
      }
    "
  >
    <span>{{ avatarInitial }}</span>
  </div>
</template>

<style scoped lang="css">
.profile-img {
  width: 30px;
  height: 30px;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgb(215, 200, 178);
  cursor: pointer;
  flex: 0 0 auto;
}
</style>
