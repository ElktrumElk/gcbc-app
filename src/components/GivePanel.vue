<script lang="ts" setup>
import { splitNumber } from '@/extras/numberSpliter'
import {
  anoucement,
  isUserLogin,
  setAnoucement,
  setGivePanel,
  showLoginPanel,
} from '@/context/general'
import { ref } from 'vue'
import gAlert from '@/extras/alert'

const inp = ref<string[]>([])

const handlePaymentInp = () => splitNumber(inp)


const handleGive = () => {
  if (!isUserLogin.value) {
    showLoginPanel?.(true)
    return
  }

  if (Number(inp.value) === 0) {
    gAlert('Please value must not be less than 1')
    return
  }

  gAlert(
    `You have successfully donated ${inp.value} into the GCBC account. Thank you for this transaction and may God bless you`,
  )

  setAnoucement(anoucement.value, (prev) => {
    prev.push({
      id: (prev.length as number) + 1,
      from: 'GCBC',
      message: `You have successfully donated ${inp.value} into the GCBC account. Thank you for this transaction and may God bless you`,
      isRead: false,
    })
  })
  setGivePanel?.(false)
}

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleGive()
  }
})
</script>

<template>
  <section id="give" @click="(e) => e.target === e.currentTarget && setGivePanel(false)">
    <div class="give-cnt">
      <div class="header">
        <h1>Donate</h1>
        <div class="currency-cnt">
          <select>
            <option>$</option>
            <option>NLE</option>
          </select>
        </div>
      </div>
      <div class="give-inp-cnt">
        <input v-model="inp" @input="() => handlePaymentInp()" />
      </div>
      <div class="payment-method">
        <span>Visa</span>
        <span>Paypal</span>
        <span>Credit / Debit</span>
      </div>

      <div class="give-btn-cnt">
        <button class="give-btn" @click="handleGive">Give</button>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.give-btn-cnt {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-start: 1rem;
}

.give-btn {
  width: 60%;
  border-radius: 0.5rem;
  padding: 1rem;
  border: var(--global-border-cl);
  background: var(--global-component-bg);
  color: var(--global-txt-cl);
}
#give {
  display: flex;
  flex-direction: column;
  align-items: center;
  inset: 0;
  position: fixed;
  background: #00000048;
  justify-content: center;
}

.give-cnt {
  width: 95%;
  max-width: 500px;
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--global-component-bg-a);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.give-cnt h1 {
  font-size: 1.1rem;
  text-align: center;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
}
.currency-cnt {
  display: flex;
  align-items: center;
  margin-inline-start: auto;
}
.currency-cnt select {
  background: none;
  border-radius: 0.4rem;
  border: var(--global-border-cl);
  padding: 0.3rem;
  cursor: pointer;
}
.give-cnt .give-inp-cnt {
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--global-component-bg-b);
  border: var(--global-border-cl);
}

.give-inp-cnt input {
  background: none;
  height: 100%;
  width: 100%;
  padding: 0.3rem;
  font-size: 1.4rem;
  line-height: 1.4rem;
  text-align: center;
  border: none;
  outline: none;
  font-weight: bolder;
  color: var(--global-txt-cl) !important;
}

.payment-method {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.payment-method span {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  background: var(--global-component-bg);
  box-shadow: 0 0 1rem rgba(65, 65, 65, 0.486);
}
</style>
