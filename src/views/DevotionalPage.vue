<script setup lang="ts">
import { ref, computed } from 'vue'

// Strict type interfaces
interface DevotionalItem {
  title: string
  image: string
}

interface TeachingsData {
  January?: DevotionalItem[]
  February?: DevotionalItem[]
  March?: DevotionalItem[]
  April?: DevotionalItem[]
  May?: DevotionalItem[]
  June?: DevotionalItem[]
}

// Internal data store replacing the external file import
const teachings = ref<TeachingsData>({
  January: [
    {
      title: 'Starting Fresh with Unshakable Faith',
      image: '/src/assets/gcbc.png',
    },
    {
      title: 'Walking into the Promises of the New Year',
      image: '/src/assets/gcbc.png',
    },
  ],
  February: [
    {
      title: 'The Transformative Power of Love and Grace',
      image: '/src/assets/gcbc.png',
    },
  ],
  April: [
    {
      title: 'Easter Sunday Celebration Devotional',
      image: '/src/assets/gcbc.png',
    },
    {
      title: 'Spring Renewal: A Complete Transformation of Mind',
      image: '/src/assets/gcbc.png',
    },
  ],
})

const searchQuery = ref('')

// Compute filtered data with precise key signatures
const groupedDevotionals = computed(() => {
  const result: Record<string, DevotionalItem[]> = {}

  Object.keys(teachings.value).forEach((month) => {
    const list = (teachings.value[month as keyof TeachingsData] || []) as DevotionalItem[]

    // Type-safe filter cycle
    const filteredList = list.filter((item: DevotionalItem) =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )

    if (filteredList.length > 0) {
      result[month] = filteredList
    }
  })

  return result
})
</script>

<template>
  <div class="search-cnt">
    <header>
      <div class="input-cnt">
        <input v-model="searchQuery" placeholder="Search devotionals..." />
      </div>
    </header>

    <div class="scroll-view">
      <!-- Loop through each Month Group vertically -->
      <section v-for="(items, month) in groupedDevotionals" :key="month" class="month-section">
        <h2 class="month-title">{{ month }}</h2>

        <!-- Grid of modern cards for this month -->
        <div class="cards-grid">
          <div v-for="(data, idx) in items" :key="idx" class="devotional-card">
            <div class="img-cnt">
              <img :src="data.image" alt="Devotional cover" />
            </div>
            <div class="card-body">
              <span class="card-tag">Sunday Service</span>
              <h3 class="card-title">{{ data.title }}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="css">
.search-cnt {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

header {
  width: 100%;
  padding: 1rem;
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
  flex: 1;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  color: #1e293b;
}

.scroll-view {
  width: 100%;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0 1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Spacing between months */
}

.month-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.month-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: rgb(147, 147, 147);
  text-transform: capitalize;
  letter-spacing: -0.025em;
  margin: 0;
}

.cards-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Modern Card Styles */
.devotional-card {
  display: flex;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.05),
    0 2px 4px -2px rgb(0 0 0 / 0.05);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border: none;
}

.devotional-card:active {
  transform: scale(0.98);
}

.img-cnt {
  width: auto;
  background-color: #090909;
  overflow: hidden;
}

.img-cnt img {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
}

.card-body {
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.card-tag {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #11d4d1; /* Modern Indigo accent */
}

.card-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #eaeaea;
  margin: 0;
  line-height: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Truncates title to 2 lines max with ellipsis */
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
}
</style>
