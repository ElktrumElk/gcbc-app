<script setup lang="ts">
import { datas } from '@/data/teachings'
import { truncateText } from '@/lib/truncate'
interface teachData {
  id: number
  title: string
  teacher: string
  date: string
  image: string
  duration: string
}

const { teachings } = datas()

const keys = Object.keys(teachings.value)
</script>

<template>
  <div class="cnt">
    <div class="sec" v-for="(key, idx) in keys" :key="idx">
      <span class="month">{{ key }}</span>
      <div class="teachings-cnt">
        <div
          class="teachings"
          v-for="(data, index) in teachings[
            key as keyof typeof teachings
          ] as unknown as teachData[]"
          :key="index"
        >
          <div class="img-cnt">
            <span class="duration">{{ data.duration }}</span>
            <img
              :src="data.image"
              :style="{ objectFit: 'cover', width: '100%', height: '100%', border: '0px' }"
            />
          </div>
          <div class="title-cnt">
            <!-- Applied the character limit truncation function here -->
            <span>{{ truncateText(data.title, 10) }}</span>
            <div class="play-cnt">
              <button><span :style="{ color: 'black' }">Play</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.play-cnt {
  display: flex;
  justify-content: space-between;
}

.play-cnt button {
  background-color: white;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: black;
  padding: 0.3rem 1rem;
  margin-inline-start: 0.4rem;
}
.duration {
  display: flex;
  position: absolute;
  right: 1rem;
  top: 1rem;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  background: rgba(2, 47, 68, 0.889);
  font-size: 0.8rem;
  color: rgb(229, 229, 229);
  text-align: center;
}

@media (max-width: 920px) {
  .play-cnt {
    display: none;
  }
}

@media (max-width: 481px) {
  .duration {
    top: 0.4rem;
    right: 0.4rem;
    font-size: 0.8rem;
  }
  .play-cnt {
    display: none;
  }
}
.cnt {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  color: white;
  padding: 0.5rem;
  gap: 1rem;
}

.sec {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.month {
  color: gray;
}

.teachings-cnt {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  overflow-y: hidden;
}

.teachings {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 8rem;
}

.img-cnt {
  width: 8rem;
  height: 10rem;
  border-radius: 0.4rem;
  overflow: hidden;
  position: relative;
}

@media (min-width: 920px) {
  .teachings-cnt {
    width: 100%;
    align-self: center;
    justify-content: space-between;
  }
  .teachings {
    border: 0.5px solid rgb(1, 35, 34);
    max-width: 20rem;
    border-radius: 0.2rem;
    cursor: pointer;
  }
  .img-cnt {
    width: 20rem;
    height: 20rem;
  }
}

.title-cnt {
  display: flex;
  width: 100%;
  padding: 1rem 0.2rem;
  color: white;
  gap: 0.5rem;
  justify-content: space-between;
}

.title-cnt span {
  word-break: break-all; /* Ensures even exceptionally long single words break cleanly */
  flex: 0 0 auto;
}
</style>
