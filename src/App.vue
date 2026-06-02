<script setup lang="ts">
import DesktopSidebar from './components/DesktopSidebar.vue'
import MobileFooter from './components/MobileFooter.vue'
import { ref } from 'vue'
import UserProfile from './components/UserProfile.vue'
import { setUserProfile, isUserProfile } from './context/userProfile.ts'
import MovieCard from './components/MovieCard.vue'
import { closeMovieCnt, isAlert, isSetting, loginPanel } from './context/general.ts'
import LoginComponent from './components/LoginComponent.vue'
import AlertPanel from './components/AlertPanel.vue'
import SettingsPanel from './components/SettingsPanel.vue'

const deviceWidth = ref(window.screen.width)
</script>

<template>
  <div class="app">
    <DesktopSidebar v-if="deviceWidth >= 920" :profile-display="setUserProfile" />
    <UserProfile v-if="isUserProfile" :handle-visibility="setUserProfile" />
    <router-view v-slot="{ Component }">
      <KeepAlive :exclude="['SearchPage']">
        <component :is="Component" />
      </KeepAlive>
    </router-view>
    <MovieCard v-if="deviceWidth < 920 && closeMovieCnt" />
    <MovieCard v-if="deviceWidth >= 920" />
    <MobileFooter v-if="deviceWidth < 920" />
    <LoginComponent v-if="loginPanel" />
    
    <KeepAlive>
      <SettingsPanel v-if="isSetting" />
    </KeepAlive>

    <AlertPanel v-if="isAlert" />
  </div>
</template>

<style lang="css" scoped>
.app {
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

@media (min-width: 920px) {
  .app {
    display: grid;
    grid-template-columns: 100px 1fr 0.5fr;
    justify-content: unset;
  }
}
</style>
