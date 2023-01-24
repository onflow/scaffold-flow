import * as fcl from '@onflow/fcl'
import { useEffect, useState } from 'react'

const unique = arr => {
  const uniqueIds = new Set()
  return arr.filter((item) => {
    if (uniqueIds.has(item.id)) {
      return false
    } else {
      uniqueIds.add(item.id)
      return true
    }
  })
}

export default function useEvents(eventName) {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fcl.events(eventName).subscribe((event) => {
      setEvents((oldEvents) => unique([...oldEvents, event]))
    })
  }, [eventName])

  return events
}