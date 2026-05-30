import { useRerender } from '@/custome/render-vue'

export interface movie {
  title: string
  date: string
  duration: string
  size: string
  thumbnail: string
}

// Holds the data of the movie that is need to be display on the movie card
export const [movieCardData, setMovieCardData] = useRerender<movie | null>(null)
// Handles the card rendering of the card display
export const [closeMovieCnt, handleCloseMovieCnt] = useRerender(false)
