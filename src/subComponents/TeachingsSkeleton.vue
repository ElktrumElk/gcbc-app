<script lang="ts" setup>
const skeleton = [1, 2, 3, 4]
</script>
<template>
  <div class="cnt">
    <span
      class="skeleton-animation-1"
      :style="{ width: '4rem', height: '1rem', alignSelf: 'flex-start', borderRadius: '.4rem' }"
    ></span>
    <div class="teachings-cnt teachings-skeleton-cnt-desktop">
      <div
        class="teachings-skeleton-desktop"
        v-for="(d, idx) in skeleton"
        :key="idx"
        :style="{
          width: '8rem',
          height: '12rem',
          borderRadius: '.4rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }"
      >
        <div
          class="skeleton-animation-1 teachings-img-skeleton-desktop"
          :style="{ width: '100%', height: '10rem', borderRadius: '.4rem' }"
        ></div>

        <div class="skel-cnt">
          <div
            class="skeleton-animation-1 teachings-info-skeleton-desktop"
            :style="{ width: '100%', height: '1rem', borderRadius: '1rem' }"
          ></div>

          <div
            class="skeleton-animation-1 teachings-info-skeleton-desktop t-i-s-d-2"
            :style="{ width: '100%', height: '1rem', borderRadius: '1rem' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
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

.teachings-cnt {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
