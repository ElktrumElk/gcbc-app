<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface SliderItem {
  id: number
  title: string
  image: string
  category: string
}

const sliderData = ref<SliderItem[]>([
  {
    id: 1,
    title: 'Miracles from Heaven',
    category: 'LAST SUNDAY',
    image:
      'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTphMmFmZGM5M2MyMTQ3ODg3OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAyNTc0YjUwMzM2ODowMDA2NTJhY2M2MDU0NTVmEAIYAQ==',
  },
  {
    id: 2,
    title: 'Mary: Grace & Obedience',
    category: 'FEATURED TEACHING',
    image: 'https://cdn.pixabay.com/photo/2017/06/03/09/52/aladin-2368384_1280.jpg',
  },
  {
    id: 3,
    title: 'The Power of Faith & Renewal',
    category: 'RECOMMENDED',
    image:
      'https://bhanumatinarsimhan.wordpress.com/wp-content/uploads/2013/06/bhanu-didi-on-shakti.jpg',
  },
])

const currentIndex = ref(0)
let timerId: ReturnType<typeof setInterval> | null = null

// Fixes Error 2532: Pre-validates the item layout with a safe fallback configuration
const currentItem = computed(() => {
  return sliderData.value[currentIndex.value] || { title: '', category: '', image: '' }
})

const nextSlide = () => {
  if (sliderData.value.length === 0) return
  currentIndex.value = (currentIndex.value + 1) % sliderData.value.length
}

const setSlide = (index: number) => {
  currentIndex.value = index
  resetTimer()
}

const resetTimer = () => {
  if (timerId) clearInterval(timerId)
  timerId = setInterval(nextSlide, 5000)
}

onMounted(() => {
  resetTimer()
})

onUnmounted(() => {
  if (timerId) clearInterval(timerId)
})

const deviceWidth = ref(window.screen.width)
</script>

<template>
  <div class="slider-wrapper">
    <!-- Checked dynamic styling block strings -->
    <div
      class="recent-card"
      :style="{
        backgroundImage: 'url(' + currentItem.image + ')',
        height: deviceWidth >= 920 ? '95dvh' : '18rem',
      }"
    >
      <div class="card-overlay">
        <span class="category-badge">
          {{ currentItem.category }}
        </span>

        <div class="bottom-cnt">
          <h1 class="movie-title">{{ currentItem.title }}</h1>

          <div class="controls-row">
            <div class="action-buttons">
              <button class="btn btn-play">Play</button>
              <button class="btn btn-details">Details</button>
            </div>

            <div class="indicator-dots">
              <button
                v-for="(_, index) in sliderData"
                :key="index"
                class="dot"
                :class="{ active: currentIndex === index }"
                @click="setSlide(index)"
                :aria-label="'Go to slide ' + (index + 1)"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-wrapper {
  width: 100%;
  max-width: 100%;
  padding: 0 0.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

@media (min-width: 920px) {
  .slider-wrapper {
    width: 95%;
  }
}

.recent-card {
  width: 100%;
  height: 18rem;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.3),
    0 8px 10px -6px rgba(0, 0, 0, 0.3);
  transition: background-image 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-overlay {
  position: absolute;
  inset: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.85) 100%
  ); /* Fixed: Removed typo token '100__%' causing standard layout validator crashes */
}

.category-badge {
  align-self: flex-start;
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 0.35rem 0.75rem;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.bottom-cnt {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.movie-title {
  color: #ffffff;
  margin: 0;
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 2.25rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.controls-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
}

.action-buttons {
  display: flex;
  gap: 0.75rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  height: 2.5rem;
  padding: 0 1.25rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:active {
  transform: scale(0.96);
}

.btn-play {
  background-color: #ffffff;
  color: #111827;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.25);
}

.btn-play:hover {
  background-color: #f3f4f6;
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.4);
}

.btn-details {
  background-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-details:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

.icon {
  width: 1.1rem;
  height: 1.1rem;
}

.indicator-dots {
  display: flex;
  gap: 0.4rem;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.35);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot:hover {
  background-color: rgba(255, 255, 255, 0.6);
}

.dot.active {
  background-color: #ffffff;
  width: 1.25rem;
  border-radius: 1rem;
}
</style>
