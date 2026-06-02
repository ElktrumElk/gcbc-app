<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { truncateText } from '@/lib/truncate'
import { handleCloseMovieCnt, setMovieCardData, type movie } from '@/context/general'
import { fetchPost } from '@/data/fetchpost'

import { useRerender } from '@/custome/render-vue'
import TeachingsSkeleton from '@/subComponents/TeachingsSkeleton.vue'

interface teachData {
  id: number
  title: string
  teacher: string
  date: string
  image: string
  duration: string
}

const deviceWidth = ref(window.screen.width)
const [teachings, setTeachings] = useRerender({})
const keys = ref<string[]>([])

onMounted(async () => {
  const id = setTimeout(async () => {
    const data = await fetchPost()
    setTeachings(data)
    keys.value = Object.keys(teachings.value)
  }, 1000)

  return () => clearTimeout(id)
})
</script>

<template>
  <TeachingsSkeleton v-if="keys?.length === 0" />
  <div class="cnt" v-if="keys.length !== 0">
    <div class="sec" v-for="(key, idx) in keys" :key="idx">
      <span class="month">{{ key }}</span>

      <div class="teachings-cnt">
        <div
          class="teachings"
          @click="
            () => {
              handleCloseMovieCnt(true)
              setMovieCardData({
                title: data.title,
                date: data.date,
                duration: data.duration,
                thumbnail: data.image,
              } as movie)
            }
          "
          v-for="(data, index) in teachings[
            key as keyof typeof teachings
          ] as unknown as teachData[]"
          :key="index"
        >
          <div class="img-cnt">
            <img
              :src="data.image"
              :style="{ objectFit: 'cover', width: '100%', height: '100%', border: '0px' }"
            />
          </div>
          <div class="title-cnt">
            <!-- Applied the character limit truncation function here -->
            <span
              :style="{
                fontSize: deviceWidth < 920 ? '.8rem' : '1.5rem',
                fontWeight: 'bolder',
                color: 'rgb(225, 224, 224)',
              }"
              >{{ truncateText(data.title, deviceWidth < 920 ? 15 : 300) }}</span
            >
            <span :style="{ color: 'GrayText' }" v-if="deviceWidth >= 920"
              >Teacher: {{ data.teacher }}</span
            >
            <div class="t-1" v-if="deviceWidth >= 920">
              <span>{{ data.date }}</span>
            </div>

            <div class="play-cnt" v-if="deviceWidth < 920">
              <button><span :style="{ color: 'black' }">Play</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.t-1 {
  display: flex;
  gap: 0.5rem;
}
.t-1 span {
  color: gray;
}
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
  gap: 1rem;
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
  transform: scale(1);
  transition: transform 0.2s ease;
}

.teachings:active {
  transform: scale(0.9);
}
.img-cnt {
  width: 8rem;
  height: 10rem;
  border-radius: 0.4rem;
  overflow: hidden;
  position: relative;
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
  font-size: 0.8rem;
}


@media (min-width: 920px) {
  .teachings-cnt {
    width: 80%;
    align-self: center;
    justify-content: space-between;
    flex-direction: column;
  }
  .teachings {
    border: 0.5px solid rgb(1, 35, 34);
    max-width: 100rem;
    border-radius: 1rem;
    cursor: pointer;
    flex-direction: row;
    border: none;
    gap: 1rem;
  }
  .img-cnt {
    width: 50rem;
    height: 20rem;
  }
  .title-cnt {
    flex-direction: column;
    gap: 0rem;
    justify-content: unset;
  }

 
}
</style>
