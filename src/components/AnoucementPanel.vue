<script setup lang="ts">
import { anoucement, setAnoucement, showAnoucement, isUnreadCount } from '@/context/general'
import { onDeactivated } from 'vue'

const handleRead = (idx: number) => {
  setAnoucement(anoucement.value, (v) => {
    ;(v[idx - 1] as unknown as (typeof v)[0]).isRead = true
  })
}
</script>

<template>
  <div class="bg" @click="(e) => e.target === e.currentTarget && showAnoucement(false)">
    <div class="anoucement-cnt">
      <div class="header">
        <h1>Anoucement</h1>

        <span
          :style="{
            display: isUnreadCount === 0 ? 'none' : 'flex',
            background: 'blue',

            padding: '.3rem .5rem',
            height: '1.5rem',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white !important',
            borderRadius: '4rem',
            flex: '0 0 auto',
          }"
          >{{ isUnreadCount }}</span
        >

        <div class="tools-cnt">
          <span
            v-on:click="
              () => {
                setAnoucement?.([])
                onDeactivated(() => setAnoucement?.([]))
              }
            "
            >Clear All</span
          >
        </div>
      </div>

      <div class="scroll-view">
        <div
          class="anoucement-card"
          v-for="(anc, idx) in anoucement"
          :key="idx"
          @click="() => handleRead(anc.id)"
        >
          <div class="profile-cnt">
            <strong>{{ anc.from.toString().substring(0, 1).toUpperCase() }}</strong>
          </div>
          <div class="info-cnt">
            <strong
              class="sender-name"
              :style="{ color: anc.isRead ? 'gray !important' : 'var(--global-txt-cl) !important' }"
              >{{ anc.from }}</strong
            >
            <div class="message-cnt">
              <p
                class="message"
                :style="{
                  color: anc.isRead ? 'gray !important' : 'var(--global-txt-cl) !important',
                }"
              >
                {{ anc.message }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.bg {
  display: flex;
  flex-direction: column;
  inset: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.336);
  align-items: center;
  justify-content: center;
}

.anoucement-cnt {
  width: 100%;
  max-width: var(--global-component-max-width);
  height: 90%;
  position: absolute;
  bottom: -4px;
  background: var(--global-component-bg);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;

  border-bottom: var(--global-border-cl);
  padding: 0.4rem 0rem;
  gap: 0.5rem;
}

.tools-cnt {
  margin-inline-start: auto;
  display: flex;
  align-items: center;
}

.tools-cnt span {
  display: flex;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
  border: var(--global-border-cl);
  color: var(--global-txt-cl);
  cursor: pointer;
  font-size: 0.8rem;
  transform: scale(1);
  transition: transform 1s ease;
}
.tools-cnt span:active {
  transform: scale(0.9);
}
h1 {
  font-size: 1.1rem;
  font-weight: bolder;
}
.scroll-view {
  flex: 1;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.anoucement-card {
  width: 100%;
  display: flex;
  align-items: center;
  border-block-end: var(--global-border-cl);
  padding: 0.5rem;
  gap: 1rem;
  cursor: pointer;
}

.profile-cnt {
  width: 50px;
  height: 50px;
  border-radius: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(1, 96, 144);
  flex: 0 0 auto;
}

.profile-cnt strong {
  color: white !important;
}

.info-cnt {
  display: flex;
  flex-direction: column;
}

.sender-name {
  font-weight: bolder;
}
.message-cnt {
  width: 100%;
}
.message-cnt p {
  line-height: 20px;
}
</style>
