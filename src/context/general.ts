import { useRerender } from '@/custome/render-vue'
import { computed } from 'vue'
import { setUserProfile } from './userProfile'

export interface movie {
  title: string
  date: string
  duration: string
  size: string
  thumbnail: string
}

export interface UserData {
  email: string
  username: string
  fullname: string
  age: string
}
// Holds the data of the movie that is need to be display on the movie card
export const [movieCardData, setMovieCardData] = useRerender<movie | null>(null)
// Handles the card rendering of the card display
export const [closeMovieCnt, handleCloseMovieCnt] = useRerender(false)
export const [isUserLogin, setUserLogin] = useRerender(localStorage.getItem('isLogin') || false)
export const [loginPanel, showLoginPanel] = useRerender<boolean>(false)

export const [userData, getUserData] = useRerender<UserData | string | null>(
  localStorage.getItem('userData') || null,
)

export const userProfile = computed(() => {
  if (!userData.value) return null

  if (typeof userData.value === 'string') {
    try {
      return JSON.parse(userData.value)
    } catch {
      return null
    }
  }
  return userData.value
})

export const handleLogout = () => {
  localStorage.clear()
  setUserProfile?.(false)
  setUserLogin(false)
  getUserData(null)
}

export const handleUserData = () => {
  getUserData(localStorage.getItem('userData') || null)
}
