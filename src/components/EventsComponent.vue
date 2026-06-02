<script setup lang="ts">
import { handleCloseMovieCnt, setMovieCardData, type movie } from '@/context/general'
import { useRerender } from '@/custome/render-vue'
import { fetchEvents } from '@/data/fetchEvents'
import EventsSkeleton from '@/subComponents/EventsSkeleton.vue'
import { onMounted } from 'vue'

const [events, setEvent] = useRerender<
  [{ title: string; duration: string; date: string; thumbnail: string; host: string }] | []
>([])

onMounted(async () => {
  const data = await fetchEvents()
  const id = setTimeout(() => {
    setEvent(data)
  }, 1000)

  return () => clearTimeout(id)
})
</script>

<template>
  <EventsSkeleton v-if="events.length === 0" />
  <div class="event-cnt" v-if="events.length !== 0">
    <h2>Events</h2>
    <div class="scroll-view">
      <div
        @click="
          () => {
            handleCloseMovieCnt(true)
            setMovieCardData({
              title: event.title,
              duration: event.duration,
              date: event.date,
              thumbnail: event.thumbnail,
            } as movie)
          }
        "
        class="event-card"
        v-for="(event, idx) in events"
        :key="idx"
        :style="{ backgroundImage: `url('${event.thumbnail}')` }"
      >
        <div class="control">
          <strong>{{ event.title }}</strong>
          <div class="cnt-div">
            <span>Host: {{ event.host }}</span>
          </div>
          <div>
            <button class="play-btn">
              <span>Play</span>
            </button>
            <button class="play-btn">
              <span>Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.event-cnt {
  width: 100%;
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  gap: 1rem;
}

.event-cnt h2 {
  font-size: 0.9rem;
  line-height: 0.8rem;
  color: gray !important;
}

.scroll-view {
  display: flex;
  align-items: center;
  overflow-x: auto;
  gap: 0.5rem;
  overflow-y: hidden;
}

.event-card {
  width: 80%;
  max-width: 400px;
  height: 17rem;
  border-radius: 1rem;
  flex: 0 0 auto;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  transform: scale(1);
  transition: transform 0.4s ease;
}

.event-card:active {
  transform: scale(0.9);
}

.control {
  background: linear-gradient(to bottom, transparent 2%, rgba(0, 0, 0, 0.811) 90%);
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0.3rem;
}

.control strong {
  font-size: 1.2rem;
  font-weight: bolder;
  color: white !important;
}
.control div:has(button) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-start: 1rem;
}

.cnt-div {
  display: flex;
  width: 100%;
  gap: 0rem;
  flex-direction: column;
}

.cnt-div span {
  color: rgb(178, 176, 176) !important;
  text-align: center;
  flex: 1;
  align-self: flex-start;
}

.play-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  border-radius: 1rem;
  border: none;
  padding: 0.4rem;
  transform: scale(1);
  transition: transform 0.4s ease;
}
.play-btn span {
  color: black !important;
  font-weight: bolder;
}

.play-btn:last-child {
  background-color: rgba(128, 128, 128, 0.301);
  backdrop-filter: blur(10px);
}
.play-btn:last-child span {
  color: white !important;
}

.event-card:has(.play-btn:active) {
  transform: scale(1);
}

.play-btn:active {
  transform: scale(0.9);
}
</style>
