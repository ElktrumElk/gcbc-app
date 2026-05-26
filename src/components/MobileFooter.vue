<template>
  <footer>
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
  </footer>
</template>

<style scoped lang="css">
footer {
  margin-block-start: auto;
  display: flex;
  gap: 1rem;
  align-items: center;
  color: black;
  width: 100%;
  padding: 0.4rem;
  font-size: 0.8rem;
  line-height: 0.8rem;
}

footer div {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  gap: 0.3rem;
}

footer span {
  color: gray;
}

footer > nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
}
</style>
