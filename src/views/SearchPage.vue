<script setup lang="ts">
import { handleCloseMovieCnt, setMovieCardData, type movie } from '@/context/general'

import { datas } from '@/data/teachings'
import { truncateText } from '@/lib/truncate'
import { ref, computed } from 'vue'

const { teachings } = datas()

// Combine all teachings into a single array
const allTeachings = ref<typeof teachings.value.April>([])

Object.keys(teachings.value).forEach((key) => {
  teachings.value[key as keyof typeof teachings.value].forEach((data) => {
    allTeachings.value.push(data)
  })
})

// Track search query
const searchQuery = ref('')

// Computed array that updates whenever searchQuery changes
const searchData = computed(() => {
  if (!searchQuery.value) return []
  return allTeachings.value.filter((teaching) =>
    teaching.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})


</script>

<template>
  <div class="search-cnt">
    <header>
      <div class="input-cnt">
        <div></div>
        <input v-model="searchQuery" placeholder="Search" />
      </div>
    </header>

    <div class="scoll-view">
      <div
        class="t"
        v-for="(data, idx) in searchData"
        :key="idx"
        @click="
          () => {
            handleCloseMovieCnt(true)
            setMovieCardData({
              title: data.title,
              duration: data.duration,
              date: data.date,
              thumbnail: data.image,
            } as movie)
          }
        "
      >
        <div class="img-cnt">
          <img
            :src="data.image"
            :style="{ objectFit: 'cover', width: '100%', height: '100%', border: '0px' }"
          />
        </div>
        <span>{{ truncateText(data.title, 25) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.search-cnt {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
  gap: 1rem;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  gap: 0.5rem;
}

.input-cnt {
  display: flex;
  border: 1px solid #444545;
  border-radius: 3rem;
  padding: 0.25rem;
  width: 100%;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.05);
}

input {
  display: flex;
  flex: 1;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1rem;
}

.scoll-view {
  width: 100%;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)); /* Prevents text from squeezing grid track */
  grid-auto-rows: 200px;
  gap: 1rem;
  padding: 1rem;
}

@media (min-width: 920px) {
  .scoll-view {
    grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
  }
}
.t {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 0.5rem;
}

.img-cnt {
  width: 100%;
  aspect-ratio: 1 / 1; /* Ensures card images remain perfectly square */
  background-color: whitesmoke;
  border-radius: 0.4rem;
  overflow: hidden;
}

span {
  color: white;
  word-break: break-word; /* Wraps long titles cleanly to the next line */
}
</style>
