import { useRerender } from '@/custome/render-vue'

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
