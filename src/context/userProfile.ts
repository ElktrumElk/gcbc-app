import { useRerender } from '@/custome/render-vue'
import { userProfile } from './general'
import { computed } from 'vue'

// Handles the visiblity of the user profile
export const [isUserProfile, setUserProfile] = useRerender(false)
//Extract the first letter of the full name for the dynamic profile avatar badge
export const avatarInitial = computed(() => {
  return userProfile.value?.fullname?.charAt(0).toUpperCase() || 'U'
})
