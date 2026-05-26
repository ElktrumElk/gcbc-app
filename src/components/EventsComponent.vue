<script setup lang="ts">
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
  },
  {
    id: 2,
    title: 'Young Adult Games Night & Trivia',
    date: 'November 14 2025',
    duration: '2:30',
    host: 'David',
    group: 'Young Adult Group',
    activityType: 'Games Night',
  },
  {
    id: 3,
    title: "Men's Breakfast & Fellowship",
    date: 'November 18 2025',
    duration: '2:00',
    host: 'Pastor John',
    group: "Men's Group",
    activityType: 'Fellowship',
  },
  {
    id: 4,
    title: "Women's Movie Night: Inspiring Faith",
    date: 'November 22 2025',
    duration: '2:15',
    host: 'Sarah',
    group: "Women's Group",
    activityType: 'Movie Night',
  },
  {
    id: 5,
    title: 'Hospital & Elderly Home Visitation',
    date: 'December 02 2025',
    duration: '3:00',
    host: 'Deacon Michael',
    group: "Men's Group",
    activityType: 'Visitation',
  },
  {
    id: 6,
    title: 'Youth Outdoor Bonfire & Worship',
    date: 'December 06 2025',
    duration: '3:30',
    host: 'Elijah',
    group: 'Youth Group',
    activityType: 'Worship Night',
  },
  {
    id: 7,
    title: 'Young Adult Career & Coffee Hangout',
    date: 'December 12 2025',
    duration: '1:45',
    host: 'Grace',
    group: 'Young Adult Group',
    activityType: 'Discussion',
  },
  {
    id: 8,
    title: "Women's Year-End Gala Dinner",
    date: 'December 19 2025',
    duration: '4:00',
    host: 'Sister Mary',
    group: "Women's Group",
    activityType: 'Dinner Celebration',
  },
  {
    id: 9,
    title: 'Youth End of Year Games Tournament',
    date: 'December 28 2025',
    duration: '5:00',
    host: 'Blessing',
    group: 'Youth Group',
    activityType: 'Games Night',
  },
  {
    id: 10,
    title: 'Combined Holiday Movie Marathon',
    date: 'January 03 2026',
    duration: '3:15',
    host: 'The Leadership Team',
    group: 'Young Adult Group',
    activityType: 'Movie Night',
  },
])
</script>

<template>
  <div class="event-cnt">
    <div class="scroll-view">
      <div class="event-card" v-for="(event, idx) in events" :key="idx">
        <img />
        <div>
          <span>{{ event.title }}</span>
          <span>{{ event.host }}</span>
          <span>{{ event.group }}</span>
          <span>{{ event.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.event-cnt {
  width: 100%;
  display: flex;
  padding: 1rem;
}

.scroll-view {
  display: flex;
  align-items: center;
  overflow-x: auto;
  gap: 0.5rem;
}

.event-card {
  width: 30rem;
  height: 30rem;
  border-radius: 1rem;
  border: 1px solid blue;
  flex: 0 0 auto;
}
</style>
