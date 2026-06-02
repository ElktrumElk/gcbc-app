import { setAlert, setAlertMessage } from '@/context/general'

export default function gAlert(message: string) {
  setAlertMessage?.(message)
  setAlert?.(true)

  const id = setTimeout(() => {
    setAlert?.(false)
  }, 2000)

  return () => clearTimeout(id)
}
