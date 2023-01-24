import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function TweetsModal({ show, handleClose, onSelect }) {
  const session = useSession()
  const twitterUser = session?.data?.user

  const {data, error} = useSWR(`/api/twitter?user=${twitterUser?.userID}`, fetcher)
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Tweets</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data && data.result.map(tweet => (
            <div key={tweet.id}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    {tweet.text}
                  </Card.Text>
                  <Button size="sm" onClick={() => onSelect(tweet)}>Select</Button>
                </Card.Body>
              </Card>
              <br />
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}