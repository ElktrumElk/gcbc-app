<template>
  <header class="header">
    <div>
      <h1>GCBC</h1>
    </div>

    <div>
      <div class="profile-image">
        <span>G</span>
      </div>
    </div>
  </header>
</template>

<style scoped lang="css">
.header {
  width: 100%;
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: black;
}
.header div {
  display: flex;
  align-items: center;
}

.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgb(215, 200, 178);
}
</style>
