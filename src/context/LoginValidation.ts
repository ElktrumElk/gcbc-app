import { handleUserData, setUserLogin, showLoginPanel } from '@/context/general'
import gAlert from '@/extras/alert'
import { type Ref } from 'vue'

interface loginType {
  emailInput: Ref<string, string>
  passwordInput: Ref<string, string>
  errorMessage: Ref<string, string>
}

export const loginValidation = async ({ emailInput, passwordInput, errorMessage }: loginType) => {
  try {
    const res = await fetch('/data/demoDB.json')
    const database = await res.json()

    const user = database[emailInput.value]

    if (user && user.password === passwordInput.value) {
      localStorage.setItem('userData', JSON.stringify(user))
      localStorage.setItem('isLogin', true as unknown as string)
      setUserLogin(true)
      showLoginPanel(false)
      handleUserData()
      gAlert('Login Successful')
    } else {
      errorMessage.value = 'Invalid email or password'
      setUserLogin(false)
      gAlert('Invalid Login or password')
    }
  } catch (e) {
    errorMessage.value = 'Database connection error' + e
    gAlert('Database Connection Error')
  }
}
