<script lang="ts" setup>
/**The Movie card is a panel where the movie or video and it details are displayed */
import { handleCloseMovieCnt } from '@/context/general'
import { movieCardData } from '@/context/general'
</script>

<template>
  <dialog class="movie-cnt">
    <button class="cls-btn" @click="() => handleCloseMovieCnt(false)">
      <span>close</span>
    </button>

    <div class="vid-cnt">
      <video controls :poster="movieCardData?.thumbnail">
        <source src="../assets/video/power_of_love.mp4" />
      </video>
    </div>
    <div>
      <h1>{{ movieCardData?.title }}</h1>
    </div>
    <div class="info-cnt">
      <span class="time">{{ movieCardData?.duration }}</span>
      <span class="time">{{ movieCardData?.date }}</span>
      <span class="time">{{ movieCardData?.size }}</span>
    </div>
    <div class="comment-div">
      <span
        :style="{
          width: '40px',
          height: '40px',
          background: 'gray',
          borderRadius: '4rem',
          flex: '0 0 auto',
          marginInlineEnd: '1rem',
        }"
      ></span>
      <input placeholder="Ask question" />
      <button>
        <span>Send</span>
      </button>
    </div>

    <section class="song-sec">
      <h2>Songs</h2>
      <ol>
        <li>
          <span>Tenki ya</span>
          <span>View Lyrics</span>
        </li>
        <li>
          <span>Hope of the world</span>
          <span>View Lyrics</span>
        </li>
        <li>
          <span>Beautiful Name</span>
          <span>View Lyrics</span>
        </li>
        <li>
          <span>Onward Christian Soldier</span>
          <span>View Lyrics</span>
        </li>
      </ol>
    </section>
  </dialog>
</template>

<style scoped lang="css">
.cls-btn {
  width: fit-content;
  padding: 0.3rem;
  background: none;
  border: 1px solid rgba(0, 119, 128, 0.682);
  border-radius: 1rem;
  align-self: flex-end;
  margin-block-end: 0.5rem;
}
.info-cnt {
  width: 100%;
  display: flex;
}

.info-cnt span {
  color: gray;
  font-size: 0.8rem;
}
.info-cnt span::after {
  content: '';
  display: inline-flex;
  width: 2px;
  height: 10px;
  background-color: rgb(63, 63, 65);
  margin-inline-start: 0.5rem;
  margin-inline-end: 0.5rem;
}

.info-cnt span:last-child:after {
  content: none;
}

.movie-cnt {
  width: 100%;
  height: 100dvh;
  max-width: 600px;
  position: absolute;
  background: rgb(8, 8, 8);
  display: flex;
  flex-direction: column;
  border: none;
  padding: 1rem;
  gap: 0.2rem;
}

@media (min-width: 920px) {
  .movie-cnt {
    position: unset;
  }
  .cls-btn {
    display: none;
  }
}

.vid-cnt {
  width: 100%;
  overflow: hidden;
  border: 0.5px solid rgba(1, 138, 145, 0.243);
  overflow: hidden;
  border-radius: 1rem;
  height: 20rem;
}

.movie-cnt video {
  width: 100%;
  height: 100%;
  max-height: 20rem;
  object-fit: cover;
}

@media (max-width: 500px) {
  .vid-cnt {
    max-height: 15rem;
  }
}

.movie-cnt video source {
  width: 100%;
  object-fit: contain;
}

h1 {
  font-size: 1.5rem;
}

.comment-div {
  margin-block-start: 1rem;
  display: flex;
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  background-color: rgba(4, 68, 87, 0.452);
}

.comment-div input {
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  background: none;
  border: none;
  outline: none;
}
.comment-div button {
  width: 40px;
  background-color: black;
  border: none;
  border-radius: 0.5rem;
}

.song-sec {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-start: 1rem;
  gap: 1rem;
}

.song-sec h2 {
  font-size: 1rem;
  line-height: 1rem;
  color: gray;
  align-self: flex-start;
}

.song-sec ol {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0rem 1rem;
  gap: 0.5rem;
}

.song-sec ol li {
  padding: 1rem;
  border-radius: 1rem;
  background: rgba(5, 99, 139, 0.452);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.song-sec ol li span:last-child {
  color: rgb(0, 157, 255);
  cursor: pointer;
}
</style>
