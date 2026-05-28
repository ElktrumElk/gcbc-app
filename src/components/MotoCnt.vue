<template>
  <section class="m-sec">
    <div class="motive-cnt">
      <span>GCBC</span>
      <strong>We are a Family a body of church age believer priest in Christ Jesus.</strong>
      <strong>A journey to the High Ground of Pleroma</strong>

      <div class="btn-cnt">
        <button>Give</button>
        <button>About us</button>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.m-sec {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.motive-cnt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.4rem;
  margin-block-start: auto;
  margin-block-start: 2rem;
  margin-block-end: 4rem;
  padding: 1rem;
}
.motive-cnt strong {
  font-size: small;
  color: gray;
  text-align: center;
}

.motive-cnt span {
  color: rgba(251, 214, 5, 0.592);
}

.btn-cnt {
  display: flex;
  gap: 1rem;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  margin-block-start: 1rem;
}

.btn-cnt button {
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  color: rgb(255, 255, 255);
  border: 0.5px solid rgb(1, 35, 34);
  background: none;
}
</style>
