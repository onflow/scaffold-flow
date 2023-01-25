import ToastContainer from 'react-bootstrap/ToastContainer'
import EventToast from './EventToast'
import useEvents from '../hooks/useEvents'
import { sansPrefix } from '@onflow/fcl'

export default function EventToastList() {
  const events = useEvents(`A.${sansPrefix(process.env.CONTRACT_ADDRESS)}.BlockTalk.TalkSaved`)

  return (
    <ToastContainer position={'bottom-end'}>
      {events.map(event => {
        return <EventToast key={event.id} event={event} />
      })}
    </ToastContainer>
  )
}