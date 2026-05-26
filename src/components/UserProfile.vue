<template>
  <dialog class="profile-card">
    <div class="cnt">
      <div class="profile-img">
        <span>M</span>
      </div>
      <div class="profile-info">
        <div class="profile-header">
          <strong>Michael Turay</strong>
          <span class="role">Pastor</span>
        </div>
        <span class="grp">Group: Mens Ministry</span>
      </div>
    </div>

    <section class="contact">
      <strong>Email: <span>Michael@GCBC.com</span></strong>
      <strong>Phone: <span>+23277458679</span></strong>
    </section>

    <section>
      <button>
        <span>Logout</span>
      </button>
    </section>
  </dialog>
</template>

<style lang="css" scoped>
:root {
  --border: 0.5px solid rgb(1, 35, 34);
  --component-bg: rgba(41, 40, 40, 0.781);
}

.profile-card {
  width: 90%;
  max-width: 500px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  border: 0.5px solid rgb(1, 35, 34);
  background-color: rgb(19, 19, 19);
  position: absolute;
  top: 50px;
  right: 20px;
  z-index: 1000;
  margin: 0 auto;
}

.cnt {
  display: flex;
  width: 100%;
  gap: 0.4rem;
  align-items: center;
}

.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(4, 46, 62);
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 0;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.role {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1rem 0.9rem;
  background: rgba(2, 63, 71, 0.468);
  color: rgb(181, 174, 174);
  border: 0.5px solid rgb(1, 35, 34);
  border-radius: 0.4rem;
}

.grp {
  align-self: flex-start;
  display: flex;
  color: gray;
}

.contact {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-block-start: 1rem;
}

section:has(button) {
  display: flex;
  width: 100%;
  justify-content: center;
}

section:has(button) button {
  display: flex;
  align-items: center;
  width: 50%;
  background-color: rgba(255, 0, 0, 0.331);
  border: 0.1px solid red;
  border-radius: 2rem;
  justify-content: center;
  padding: 0.3rem;
  margin-block-start: 1rem;
}
</style>
