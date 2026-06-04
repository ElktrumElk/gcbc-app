<script setup lang="ts">
import { setAboutusPanel } from '@/context/general'
</script>

<template>
  <div class="bg" @click="(e) => e.target === e.currentTarget && setAboutusPanel?.(false)">
    <article class="article">
      <header>
        <h1>About us</h1>
      </header>

      <div class="scroll-view">
        <h2>Grace Center Bile Church</h2>
        <p>
          We are a family a body of church age believer preist in Christ Jesus. As for we on a
          journey to the high ground of pleroma. GCBC has been around for 20yrs reaching to the
          world stregthingin faith in Christ.
        </p>
      </div>
    </article>
  </div>
</template>

<style scoped lang="css">
.bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  inset: 0;
  background: #00000048;
  position: fixed;
}

.article {
  width: 100%;
  max-width: var(--global-component-max-width);
  height: 90%;
  position: absolute;
  bottom: 0;
  border-radius: 0.5rem;
  background: var(--global-component-bg);
  padding: 1rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.article header {
  display: flex;
  align-items: center;
  border-bottom: var(--global-border-cl);
}

.article header h1 {
  color: var(--global-txt-cl);
  font-size: 1.1rem;
}

.scroll-view {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding-block-start: 1rem;
}

.scroll-view h2 {
  color: var(--global-txt-cl);
  text-decoration: underline;
  align-self: center;
}
</style>
