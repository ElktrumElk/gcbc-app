import { useRerender } from '@/custome/render-vue'
import { computed } from 'vue'
import { setUserProfile } from './userProfile'
import gAlert from '@/extras/alert'

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
  if (!userData.value) {
    gAlert?.('Invalid User please login')
    showLoginPanel?.(true)
    setUserLogin?.(false)
    setUserProfile(false)
    return null
  }

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
  gAlert('User Logout.')
}

export const handleUserData = () => {
  getUserData(localStorage.getItem('userData') || null)
}

// triggered the alert component
export const [isAlert, setAlert] = useRerender<boolean>(false)
// message of the alert
export const [alertMessage, setAlertMessage] = useRerender<string>('')

// settings panel
export const [isSetting, showSetting] = useRerender(false)

// Anoucement panel
export const [isAnoucement, showAnoucement] = useRerender(false)

// About us Panel
export const [isAboutusPanel, setAboutusPanel] = useRerender(false)

// givepanel
export const [isGivePanel, setGivePanel] = useRerender(false)

export const [anoucement, setAnoucement] = useRerender([
  {
    id: 1,
    from: 'Michael Turay',
    message:
      'Church has almost reached in finnishing of the building. Thanks to the ose pikin dem for unu support',
    isRead: false,
  },
  {
    id: 2,
    from: 'Hawald Parker',
    message:
      'Youth will be having there monthly visitation for this month at Blessing Babao house. We pray God they have a safe trip and spend it God fearly.',
    isRead: false,
  },
  {
    id: 3,
    from: 'Hawald Parker',
    message:
      "Our weekly Bible study will start soon. We pray God to see you all and have a wonderful knowledge on God's word",
    isRead: true,
  },
])

export const isUnreadCount = computed(() => {
  return anoucement.value.filter((x) => !x.isRead).length
})
