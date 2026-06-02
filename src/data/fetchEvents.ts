export async function fetchEvents() {
  const res = await fetch('/data/eventsTable.json')
  const data = await res.json()

  return data
}
