<script setup lang="ts">
import { alertMessage } from '@/context/general'
import { onDeactivated, onMounted } from 'vue'

const handleAnimation = () => {
  const dialog = document.getElementById('dialog')
  const anim = dialog?.getAnimations()[0]

  const cancelAnimation = () => anim?.cancel()
  const playAnimation = () => anim?.play()

  return { cancelAnimation, playAnimation }
}

onMounted(() => {
  const { playAnimation } = handleAnimation()
  playAnimation()
})
onDeactivated(() => {
  const { cancelAnimation } = handleAnimation()
  cancelAnimation()
})
</script>

<template>
  <dialog id="dialog" class="alert-dialog">
    <div class="alert-cnt">
      <div class="alert-ic"></div>
      <div class="alert-mesg-cnt">
        <p class="alert-msg">{{ alertMessage }}</p>
      </div>
    </div>
  </dialog>
</template>

<style lang="css" scoped>
.alert-dialog {
  display: flex;
  border: none;
  align-items: center;
  background: none;
  position: fixed;
  top: 1rem;
  align-self: center;
  margin-inline-start: auto;
  margin-inline-end: auto;
  animation: alert 0.2s linear 1;
  animation-play-state: paused;
  z-index: 10000;
}
.alert-cnt {
  display: flex;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  width: auto;
  max-width: 300px;
  background: rgba(41, 40, 40, 1);
  border: var(--global-border-cl);
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
}

@keyframes alert {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.alert-ic {
  display: flex;
  width: 20px;
  height: 20px;
  border: 1px solid green;
  border-radius: 1rem;
}
</style>
