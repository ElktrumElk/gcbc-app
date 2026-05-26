export // Truncates text strictly by character length limit (e.g., 25 characters)
const truncateText = (text: string, limit: number = 10): string => {
  if (text.length <= limit) return text
  return text.substring(0, limit) + '...'
}
