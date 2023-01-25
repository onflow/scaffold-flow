import { Talk } from './Talk'

export function TalkList({ talks }) {
  return (
    <div>
      {talks.map(talk => <Talk key={talk.id} body={talk.body} />)}
    </div>
  )
}