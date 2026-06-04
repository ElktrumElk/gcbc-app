<script lang="ts" setup>
import { handleLightmode, isLightMode, showSetting, userProfile } from '@/context/general'
import { useRerender } from '@/custome/render-vue'
import WallpaperPanel from './WallpaperPanel.vue'
import ToggleButton from '@/subComponents/ToggleButton.vue'
import ProfileImage from '@/subComponents/ProfileImage.vue'

const [headerName, setHeaderName] = useRerender('Settings')
</script>

<template>
  <div class="bg" @click="(e) => e.target === e.currentTarget && showSetting?.(false)">
    <div class="setting-dialog">
      <div class="header">
        <button
          class="back-btn"
          v-if="headerName !== 'Settings'"
          @click="() => setHeaderName('Settings')"
        >
          {{ '<' }}
        </button>
        <h1>{{ headerName }}</h1>
      </div>
      <div class="scroll-view">
        <section class="set-sec" v-if="headerName === 'Settings'">
          <div class="user-card">
            <ProfileImage
              background="#026a61eb"
              :styles="{
                fontSize: '1.1rem',
                width: '3rem',
                height: '3rem',
              }"
            />
            <div class="info-cnt">
              <h2>{{ userProfile?.username }}</h2>

              <div class="inf-sub">
                <span>Role: {{ userProfile?.role }},</span>
                <span>Age: {{ userProfile?.age }}</span>
              </div>

              <div class="inf-sub">
                <span>Email: {{ userProfile?.email }},</span>
              </div>

              <button class="edit-button">Edit</button>
            </div>
          </div>
        </section>

        <section class="set-sec" v-if="headerName === 'Settings'">
          <ul>
            <li class="color-mode-list">
              <span>Light Mode</span>
              <ToggleButton :mode="isLightMode" :is-click="() => handleLightmode()" />
            </li>

            <li class="color-mode-list">
              <span>Hover</span>
              <ToggleButton :mode="true" />
            </li>

            <li @click="() => setHeaderName('Wallpaper')">
              <span>Wallpaper</span>
            </li>
          </ul>
        </section>

        <section class="set-sec" v-if="headerName === 'Settings'">
          <ul>
            <li class="color-mode-list">
              <span>Account</span>
            </li>

            <li class="color-mode-list">
              <span>Privacy</span>
            </li>

            <li class="color-mode-list">
              <span>Notifications</span>
            </li>
          </ul>
        </section>
        <KeepAlive>
          <WallpaperPanel v-if="headerName === 'Wallpaper'" />
        </KeepAlive>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.user-card {
  display: flex;
  gap: 1rem;
  width: 100%;
  border-radius: 2rem;
  background: var(--global-component-bg-c);

  padding: 1rem;
}

.info-cnt {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.info-cnt h2 {
  font-size: 1.3rem;
  line-height: 1.3rem;
}

.inf-sub {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.2rem;
}

.inf-sub:nth-child(3) {
  border-bottom: var(--global-border-cl) !important;
  padding-bottom: 1rem;
}
.inf-sub span {
  color: gray !important;
  line-height: 1rem;
}
.set-sec {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
}

.edit-button {
  background: none;
  border: none;
  color: rgb(0, 140, 255) !important;
  font-size: 1rem;
  text-align: right;
  padding: 0rem 1rem;
}
.set-sec h3 {
  font-size: 0.8 !important;
  color: gray !important;
}
.back-btn {
  background: none;
  padding: 0.2rem 1rem;
  margin-inline-end: 0.5rem;
  border-radius: 1rem;
  border: var(--global-border-cl);
}
.bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0000004d;
  inset: 0;
  position: fixed;
}

.setting-dialog {
  width: 100%;
  max-width: var(--global-component-max-width);
  padding: 1rem;
  background: var(--global-component-bg);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 0;
  height: 90%;
}
.setting-dialog .header {
  display: flex;
  align-items: center;

  width: 100%;
}

.header h1 {
  font-size: 1.5rem;
}
.scroll-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  overflow-y: auto;
  flex: 1;
}

.scroll-view ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  background-color: var(--global-component-bg-c);
  border-radius: 1rem;
  padding: 0.4rem;
}

.color-mode-list {
  display: flex;
  justify-content: space-between;
}

.scroll-view ul li {
  display: flex;
  padding: 0.5rem 0.5rem;
  align-items: center;
  border-bottom: var(--global-border-cl-b);
}

.scroll-view ul li span {
  font-weight: 400;
  font-size: 1.1rem;
}
.scroll-view ul li:last-child {
  border-bottom: none;
}
</style>
