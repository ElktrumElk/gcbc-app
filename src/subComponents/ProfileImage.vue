<script setup lang="ts">
defineProps({
  handleProfileDisplay: Function,
})
</script>

<template>
  <div class="profile-img" @click="() => handleProfileDisplay?.(true)">
    <span>M</span>
  </div>
</template>

<style scoped lang="css">
.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgb(215, 200, 178);
  cursor: pointer;
}
</style>
