<script setup lang="ts">
import { isUserLogin, showLoginPanel } from '@/context/general'
import { avatarInitial, setUserProfile } from '@/context/userProfile'

defineProps({
  handleProfileDisplay: Function,
})
</script>

<template>
  <div
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
