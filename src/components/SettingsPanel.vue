<script lang="ts" setup>
import { showSetting } from '@/context/general'
import { useRerender } from '@/custome/render-vue'

const [isLightMode, setLightMode] = useRerender<boolean>(false)
const handleLightmode = () => {
  setLightMode(!isLightMode.value)
  if (isLightMode.value) {
    document.body.classList.add('light')
  } else {
    document.body.classList.remove('light')
  }
}
</script>

<template>
  <div class="bg" @click="(e) => e.target === e.currentTarget && showSetting?.(false)">
    <div class="setting-dialog">
      <div class="header">
        <h1>Settings</h1>
      </div>
      <div class="scroll-view">
        <ul>
          <li class="color-mode-list">
            <span>Light Mode</span>
            <div
              class="color-toggle"
              @click="handleLightmode"
              :style="{
                alignItems: isLightMode ? 'flex-end' : 'flex-start',
                background: isLightMode ? '#04c7ea7d' : 'none',
                transition: 'background .2s ease',
              }"
            >
              <div class="toggle-ctr"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
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
  max-width: 500px;
  padding: 1rem;
  background: var(--global-component-bg);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 0;
  min-height: 50rem;
}
.setting-dialog .header {
  display: flex;
  align-items: center;
  border-bottom: var(--global-border-cl);
  width: 100%;
}

.scroll-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  overflow-y: auto;
}

.scroll-view ul {
  list-style: none;
}

.color-mode-list {
  display: flex;
  justify-content: space-between;
}

.color-toggle {
  display: flex;
  flex-direction: column;
  width: 3rem;
  padding: 0.3rem;
  border-radius: 3rem;
  border: var(--global-border-cl);
  cursor: pointer;
}
.toggle-ctr {
  width: 1rem;
  height: 1rem;
  border-radius: 4rem;
  background: rgb(255, 255, 255);
}
</style>
