<script setup lang="ts">
import { showLoginPanel } from '@/context/general'
import { loginValidation } from '@/context/LoginValidation'
import { ref } from 'vue'

const emailInput = ref('')
const passwordInput = ref('')
const errorMessage = ref('')

const handleLogin = async (e: SubmitEvent) => {
  e.preventDefault()
  errorMessage.value = ''

  loginValidation({
    emailInput: emailInput,
    passwordInput: passwordInput,
    errorMessage: errorMessage,
  })
}
</script>

<template>
  <div
    class="bg"
    @click="
      (e) => {
        e.target === e.currentTarget && showLoginPanel(false)
      }
    "
  >
    <div class="login-invs-cnt">
      <div class="login-cnt">
        <div class="log-header">
          <h2>GCBC</h2>
          <span class="sign-up">Sign up</span>
        </div>
        <h3>Login</h3>
        <p :style="{ color: 'gray', marginBlockEnd: '1rem' }">
          Please Login before any interaction
        </p>

        <p
          v-if="errorMessage"
          :style="{ color: 'red', marginBlockEnd: '1rem', fontSize: '0.9rem' }"
        >
          {{ errorMessage }}
        </p>

        <form class="login-form" @submit="(e) => handleLogin(e)">
          <div>
            <label for="user-email">Email</label>
            <input id="user-email" v-model="emailInput" placeholder="Email" required type="email" />
          </div>

          <div>
            <label for="user-password">Password</label>
            <input
              id="user-password"
              v-model="passwordInput"
              placeholder="password"
              required
              type="password"
            />
          </div>

          <button class="login-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.log-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-block-end: 1rem;
}
.sign-up {
  display: flex;
  padding: 0.2rem 0.8rem;
  border-radius: 0.4rem;
  border: 0.5px solid rgba(3, 196, 255, 0.458);
}

.sign-up:hover {
  background: rgba(3, 196, 255, 0.458);
  cursor: pointer;
}
h2 {
  color: rgb(202, 228, 247);
}
.bg {
  inset: 0;
  display: flex;
  background: #00000087;
  flex-direction: column;
  position: fixed;
  place-items: center;
  place-content: center;
  align-items: center;
  z-index: 1000;
}

.login-invs-cnt {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 90%;
  max-width: 400px;
}

.login-cnt {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  align-items: center;
  background: rgba(41, 40, 40, 1);
  border: none;
  width: 100%;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
}

.login-form * {
  width: 100%;
}

.login-form div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}
.login-form div * {
  width: 100%;
}
.login-form input {
  padding: 1rem;
  background: none;
  border: 0.5px solid rgba(3, 196, 255, 0.458);
  border-radius: 0.8rem;
  outline: none;
}

.login-form button[type='submit'] {
  width: 50%;
  padding: 0.5rem 1rem;
  background: rgb(2, 141, 172);
  border-radius: 0.5rem;
  border: none;
  margin-block-start: 1rem;
}
</style>
