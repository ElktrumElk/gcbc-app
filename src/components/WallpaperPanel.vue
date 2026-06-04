<script lang="ts" setup>
import { useRerender } from '@/custome/render-vue'
import { onActivated, onDeactivated, ref, type VNodeRef } from 'vue'

const [isDrag, setDrag] = useRerender(false)
const [moveY, setMoveY] = useRerender(0)
const track = ref<VNodeRef>('')

const start = () => {
  setDrag(true)
}

const move = (e: MouseEvent | TouchEvent) => {
  const targetMouse = e as unknown as MouseEvent
  const targetTouch = e as TouchEvent

  if (isDrag.value) {
    if (targetTouch.touches[0]) {
      setMoveY(targetTouch.touches[0].clientX + 20)
      console.log(track.value)
    } else {
      setMoveY(targetMouse.clientX)
    }
  }
}

const end = () => {
  if (isDrag.value) {
    setDrag(false)
  }
}
const [opy, setOpacity] = useRerender(0)
const [transY, setTrans] = useRerender(100)

let i = 0
let j = 100
onActivated(() => {
  requestAnimationFrame(() => {
    const id = setInterval(() => {
      if (opy.value >= 1) {
        clearInterval(id)
      } else {
        i += 0.05
        j -= 20
        setOpacity(i)
        setTrans(j)
      }
    }, 10)
  })
})

onDeactivated(() => {
  i = 0
  j = 100
  setOpacity(i)
  setTrans(j)
})
</script>

<template>
  <div
    class="wallpaper-cnt"
    @mousemove="(e) => move(e)"
    @mouseup="() => end()"
    @touchmove="(e) => move(e)"
    @touchend="() => end()"
    :style="{
      opacity: opy,
      transform: `translateX(${transY < 0 ? 0 : transY}%)`,
    }"
  >
    <div class="image-cnt">
      <span>Select Wallpaper</span>
      <input type="file" accept="image/*" hidden />
    </div>

    <section class="sec">
      <div class="blur-panel">
        <div class="blur-name">
          <span>Blur Strength</span>
          <span>0</span>
        </div>

        <div class="blur-track" id="track" :ref_for="track">
          <div
            @mousedown="() => start()"
            @touchstart="() => start()"
            class="blur-thumb"
            :style="{ transform: `translateX(${moveY}%)` }"
          ></div>
        </div>
      </div>

      <div class="done-btn">
        <button>Done</button>
      </div>
    </section>
  </div>
</template>

<style scoped lang="css">
.done-btn {
  display: flex;
  width: 100%;
  margin-block-start: auto;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
}
.done-btn button {
  width: 50%;
  background: none;
  border: var(--global-border-cl);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
}
.wallpaper-cnt {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 1rem;
  opacity: 0;
}

.image-cnt {
  width: 100%;
  height: 20rem;
  border-radius: 1rem;
  background: var(--global-component-bg-b);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}
.sec {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding-bottom: 1rem;
}

.blur-panel {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.4rem;
}

.blur-name {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.blur-track {
  width: 100%;
  height: 0.8rem;
  background: repeating-linear-gradient(
    to right,
    rgba(0, 166, 255, 0.401) 1%,
    transparent 2%,
    transparent 3%
  );

  border-radius: 1rem;
  background-color: transparent;
  overflow: visible;
  display: flex;
  align-items: center;
}
.blur-thumb {
  display: flex;
  flex-direction: column;
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
  border-radius: 1rem;
  background: var(--global-txt-cl);
  box-shadow: -2px 0px 10px var(--global-txt-cl);
}
</style>
