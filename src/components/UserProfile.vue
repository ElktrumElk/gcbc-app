<script lang="ts" setup>
import { handleLogout, userProfile } from '@/context/general'
import { computed, ref } from 'vue'
import { avatarInitial } from '@/context/userProfile'
defineProps({
  Visibility: Boolean,
  handleVisibility: Function,
})

const deviceWidth = ref(window.screen.width)

const handleWidth = computed(() => {
  return deviceWidth.value
})
</script>

<template>
  <!-- Control dialog rendering via the Visibility prop state -->
  <dialog
    class="profile-wrapper"
    :style="
      handleWidth >= 920
        ? {
            bottom: '50px',
            top: 'unset',
            left: '100px',
            right: 'unset',
          }
        : {}
    "
  >
    <button class="cls-button" @click="() => handleVisibility?.(false)">
      <span>Close</span>
    </button>
    <div class="profile-card">
      <div class="cnt">
        <div class="profile-img">
          <span>{{ avatarInitial }}</span>
        </div>
        <div class="profile-info">
          <div class="profile-header">
            <strong>{{ userProfile?.username }}</strong>
            <span class="role">{{ userProfile?.role }}</span>
          </div>
          <span class="grp">Group: Mens Ministry</span>
        </div>
      </div>

      <section class="contact">
        <div>
          <strong
            >Email: <span>{{ userProfile?.email }}</span></strong
          >
        </div>
        <div>
          <strong
            >Fullname: <span>{{ userProfile?.fullname }}</span></strong
          >
        </div>
        <div>
          <strong
            >Phone: <span>{{ userProfile?.contact }}</span></strong
          >
        </div>
      </section>

      <section>
        <button @click="() => handleLogout()">
          <span>Logout</span>
        </button>
      </section>
    </div>
  </dialog>
</template>

<style lang="css" scoped>
:root {
  --border: 0.5px solid rgb(1, 35, 34);
  --component-bg: rgba(41, 40, 40, 0.781);
  --cl: #06aee1;
}

.profile-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 550px;
  position: absolute;
  top: 50px;
  right: 20px;
  z-index: 1000;
  margin: 0 auto;
  background: transparent;
  border: none;
  gap: 1rem;
}

.cls-button {
  width: 50px;
  height: 50px;
  border-radius: 4rem;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--global-component-bg);
  border: 0.5px solid rgb(1, 35, 34);
  transform: scale(1);
  transition: transform 0.4s ease;
}

.cls-button:active {
  transform: scale(0.9);
}

.profile-card {
  width: 100%;
  max-width: 450px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  border: 0.5px solid rgb(1, 35, 34);
  background: var(--global-component-bg);
}

.cnt {
  display: flex;
  width: 100%;
  gap: 0.4rem;
  align-items: center;
}

.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(4, 46, 62);
}

.profile-img span {
  color: white !important;
}
.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 0;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.profile-header strong {
  font-weight: bolder;
  font-size: 1.1rem;
}

.role {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1rem 0.9rem;
  background: var(--global-component-bg-b);
  color: rgb(181, 174, 174);
  border: 0.5px solid rgba(41, 43, 43, 0.089);
  border-radius: 0.4rem;
}

.grp {
  align-self: flex-start;
  display: flex;
  color: gray;
}

.contact {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-block-start: 1rem;
  gap: 0.5rem;
  background-color: var(--global-component-bg-b);
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.contact > div {
  display: flex;
  align-items: center;
  padding: 0.3rem;
  border-radius: 0.5rem;
  width: 100%;
  background-color: var(--global-component-bg-b);
}

section:has(button) {
  display: flex;
  width: 100%;
  justify-content: center;
}

section button {
  display: flex;
  align-items: center;
  width: 50%;
  background-color: rgba(255, 0, 0, 0.102);
  border: 0.1px solid red;
  border-radius: 2rem;
  justify-content: center;
  padding: 0.3rem;
  margin-block-start: 1rem;
  transform: scale(1);
  transition: transform 0.4s ease;
  cursor: pointer;
}

section button span {
  color: red;
}

section button:hover {
  background: rgba(255, 0, 0, 0.365);
}

section button:active {
  transform: scale(0.9);
}
</style>
