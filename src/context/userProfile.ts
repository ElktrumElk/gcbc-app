import { useRerender } from '@/custome/render-vue'

// Handles the visiblity of the user profile
export const [isUserProfile, setUserProfile] = useRerender(false)
