<script setup lang="ts">
import { onMounted, ref } from 'vue'

const leaders = ref([
  { id: 1, leaderName: 'Michael Turay', role: 'Pastor' },
  { id: 2, leaderName: 'Hawald Parker', role: 'Asistant Pastor' },
  { id: 3, leaderName: 'Brother Davis', role: 'Unknown' },
  { id: 4, leaderName: 'Brother Kenneth', role: 'Unknown' },
])

const members = ref([
  { id: 1, memberName: 'Elkanah Cole', group: 'Neotes (Youth)', role: 'Manager of the It' },
  { id: 2, memberName: 'Michael Turay', group: 'Mens Group', role: 'Pastor' },
  { id: 3, memberName: 'Hawald Parker', group: 'Mens Group', role: 'Head of Mens Group' },
  { id: 4, memberName: 'Nathan Turay', group: 'Neotes (Youth)', role: 'It Department' },
  { id: 5, memberName: 'Blessing Babao', group: 'Neotes (Youth)', role: 'Osher' },
  { id: 6, memberName: 'Rachel Parker', group: 'Neotes (Youth)', role: 'Osher' },
  { id: 7, memberName: 'Jorgiana Turay', group: 'Childrens Ministry', role: 'Head of Childrens' },
  { id: 8, memberName: 'Cimone Kamara', group: 'Childrens Ministry', role: '...' },
])

const cntOpacity = ref(0)
const trans = ref(60)

onMounted(async () => {
  requestAnimationFrame(() => {
    const opa = setInterval(() => {
      if (cntOpacity.value >= 1) {
        clearInterval(opa)
      } else {
        cntOpacity.value = cntOpacity.value + 0.05
      }
    })

    const tran = setInterval(() => {
      if (trans.value <= 0) {
        clearInterval(tran)
      } else {
        trans.value -= 5
      }
    })
  })
})
</script>

<template>
  <div
    class="family-cnt"
    :style="{
      transition: 'opacity .1s ease',
      opacity: cntOpacity,
      transform: `translateY(${trans}%)`,
    }"
  >
    <div class="leader-cnt">
      <span class="title">Leaders</span>
      <div class="leaders-section">
        <div class="leader-box" v-for="(leader, idx) in leaders" :key="idx">
          <div class="profile-img"></div>
          <strong class="leader-name">{{ leader.leaderName }}</strong>
          <span class="role">{{ leader.role }}</span>
        </div>
      </div>
    </div>

    <section class="input-section">
      <input type="search" placeholder="Search Memeber" />
      <select name="filter" id="filter">
        <option value="Member">Memebr</option>
        <option value="Group">Group</option>
      </select>
    </section>

    <section class="list-section">
      <div class="member-card" v-for="(memeber, idx) in members" :key="idx">
        <div class="profile-img"></div>
        <div class="info">
          <strong>{{ memeber.memberName }}</strong>
          <span>Group: {{ memeber.group }}</span>
          <span>Role: {{ memeber.role }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="css">
.family-cnt {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  gap: 2rem;
}

.leaders-section {
  width: 100%;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1rem;
  padding-inline-start: 0.8rem;
  padding-inline-end: auto;
  background-color: var(--global-component-bg-a);
  border-radius: 1.5rem;
}

.leader-box {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-size: 0.8rem;
  line-height: 0.8rem;
  gap: 0.5rem;
  flex: 0 0 auto;
}

.profile-img {
  width: 60px;
  height: 60px;
  border-radius: 4rem;
  background-color: rgb(246, 218, 146);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.leader-name {
  word-break: keep-all;
  text-wrap: nowrap;
}

.title {
  color: gray;
}

.leader-cnt {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.role {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 0.5px solid rgb(1, 35, 34);
  background: rgba(1, 51, 55, 0.6);
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
}

.input-section {
  display: flex;
  width: 100%;
  gap: 1rem;
}

input[type='search'] {
  background: none;
  border: none;
  border-radius: 1rem;
  width: 100%;
  padding: 0.5rem;
  border: var(--global-border-cl);
  outline: none;
}

select[name='filter'] {
  width: 7rem;
  background: none;
  border: 0.5px solid rgba(5, 63, 75, 0.594);
  padding: 0.5rem;
  cursor: pointer;
}
.list-section {
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
}

.member-card {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  background: none;
  border-radius: 1rem;
  width: 100%;
  transform: scale(1);
  box-shadow: var(--member-card-box-shadow);
  border-block-end: var(--global-border-cl);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
  cursor: pointer;
}

.member-card:hover {
  transform: scale(1.05);
  box-shadow: var(--member-card-box-shadow-hover);
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}
.info:last-child {
  color: gray;
}
</style>
