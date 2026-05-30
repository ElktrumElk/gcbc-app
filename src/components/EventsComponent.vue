<script setup lang="ts">
import { handleCloseMovieCnt, setMovieCardData, type movie } from '@/context/general'
import { ref } from 'vue'

const events = ref([
  {
    id: 1,
    title: "Youth Visitation at Blessing's",
    date: 'November 10 2025',
    duration: '1:35',
    host: 'Blessing',
    group: 'Youth Group',
    activityType: 'Visitation',
    thumbnail:
      'https://images.trvl-media.com/place/3000458394/c30027e8-6c12-43ec-bddc-bc30f971cb29.jpg',
  },
  {
    id: 2,
    title: 'Young Adult Games Night & Trivia',
    date: 'November 14 2025',
    duration: '2:30',
    host: 'David',
    group: 'Young Adult Group',
    activityType: 'Games Night',
    thumbnail:
      'https://images.trvl-media.com/place/3000458394/c30027e8-6c12-43ec-bddc-bc30f971cb29.jpg',
  },
  {
    id: 3,
    title: "Men's Breakfast & Fellowship",
    date: 'November 18 2025',
    duration: '2:00',
    host: 'Pastor John',
    group: "Men's Group",
    activityType: 'Fellowship',
    thumbnail:
      'https://images.trvl-media.com/place/3000458394/c30027e8-6c12-43ec-bddc-bc30f971cb29.jpg',
  },
  {
    id: 4,
    title: "Women's Movie Night: Inspiring Faith",
    date: 'November 22 2025',
    duration: '2:15',
    host: 'Sarah',
    group: "Women's Group",
    activityType: 'Movie Night',
    thumbnail:
      'https://images.trvl-media.com/place/3000458394/c30027e8-6c12-43ec-bddc-bc30f971cb29.jpg',
  },
  {
    id: 5,
    title: 'Hospital & Elderly Home Visitation',
    date: 'December 02 2025',
    duration: '3:00',
    host: 'Deacon Michael',
    group: "Men's Group",
    activityType: 'Visitation',
    thumbnail:
      'https://images.trvl-media.com/place/3000458394/c30027e8-6c12-43ec-bddc-bc30f971cb29.jpg',
  },
  {
    id: 6,
    title: 'Youth Outdoor Bonfire & Worship',
    date: 'December 06 2025',
    duration: '3:30',
    host: 'Elijah',
    group: 'Youth Group',
    activityType: 'Worship Night',
    thumbnail:
      'https://images.trvl-media.com/place/3000458394/c30027e8-6c12-43ec-bddc-bc30f971cb29.jpg',
  },
  {
    id: 7,
    title: 'Young Adult Career & Coffee Hangout',
    date: 'December 12 2025',
    duration: '1:45',
    host: 'Grace',
    group: 'Young Adult Group',
    activityType: 'Discussion',
    thumbnail:
      'https://images.trvl-media.com/place/3000458394/c30027e8-6c12-43ec-bddc-bc30f971cb29.jpg',
  },
  {
    id: 8,
    title: "Women's Year-End Gala Dinner",
    date: 'December 19 2025',
    duration: '4:00',
    host: 'Sister Mary',
    group: "Women's Group",
    activityType: 'Dinner Celebration',
    thumbnail:
      'https://images.trvl-media.com/place/3000458394/c30027e8-6c12-43ec-bddc-bc30f971cb29.jpg',
  },
  {
    id: 9,
    title: 'Youth End of Year Games Tournament',
    date: 'December 28 2025',
    duration: '5:00',
    host: 'Blessing',
    group: 'Youth Group',
    activityType: 'Games Night',
    thumbnail:
      'https://images.trvl-media.com/place/3000458394/c30027e8-6c12-43ec-bddc-bc30f971cb29.jpg',
  },
  {
    id: 10,
    title: 'Combined Holiday Movie Marathon',
    date: 'January 03 2026',
    duration: '3:15',
    host: 'The Leadership Team',
    group: 'Young Adult Group',
    activityType: 'Movie Night',
    thumbnail:
      'https://images.trvl-media.com/place/3000458394/c30027e8-6c12-43ec-bddc-bc30f971cb29.jpg',
  },
])
</script>

<template>
  <div class="event-cnt">
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
  color: gray;
}

.scroll-view {
  display: flex;
  align-items: center;
  overflow-x: auto;
  gap: 0.5rem;
  overflow-y: hidden;
}

.event-card {
  width: 25rem;
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
  color: rgb(178, 176, 176);
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
  color: black;
  font-weight: bolder;
}

.play-btn:last-child {
  background-color: rgba(128, 128, 128, 0.301);
  backdrop-filter: blur(10px);
}
.play-btn:last-child span {
  color: white;
}

.event-card:has(.play-btn:active) {
  transform: scale(1);
}

.play-btn:active {
  transform: scale(0.9);
}
</style>
