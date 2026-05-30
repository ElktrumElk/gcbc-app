<script setup lang="ts">
import ProfileImage from '@/subComponents/ProfileImage.vue'

defineProps({
  profileDisplay: null,
})
</script>
<template>
  <aside>
    <h1>GCBC</h1>
    <nav>
      <router-link to="/home">
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=73&format=png&color=7a7a7a"
            width="20px"
            height="20px"
          />
          <span>Home</span>
        </div>
      </router-link>

      <router-link to="/search">
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=7695&format=png&color=7a7a7a"
            width="20px"
            height="20px"
          />
          <span>Search</span>
        </div>
      </router-link>

      <router-link to="/devotional">
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=1988&format=png&color=7a7a7a"
            width="20px"
            height="20px"
          />
          <span>Devo</span>
        </div>
      </router-link>
      <router-link to="/family">
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=6884&format=png&color=7a7a7a"
            width="20px"
            height="20px"
          />
          <span>Family</span>
        </div>
      </router-link>
    </nav>
    <div class="profile-cnt">
      <profile-image :handle-profile-display="profileDisplay" />
    </div>
  </aside>
</template>

<style lang="css" scoped>
.profile-cnt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-block-start: auto;
  margin-block-end: 4rem;
}
aside {
  width: 4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
aside h1 {
  font-size: 1.6rem;
}

nav {
  display: flex;
  width: 100%;
  height: 80;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-block-start: 1rem;
}

nav div {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  align-items: center;
}

@media (max-width: 920px) {
  aside {
    display: none;
  }
}
</style>
