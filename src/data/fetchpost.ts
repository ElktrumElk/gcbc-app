export async function fetchPost() {
  const res = await fetch('/data/postTable.json')
  const data = await res.json()

  return data
}
