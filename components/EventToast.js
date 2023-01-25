import { useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

export default function EventToast({ event }) {
  const [show, setShow] = useState(true)

  return (
    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
      <Toast.Header>
        <img
          src="holder.js/20x20?text=%20"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">New Talk Created</strong>
      </Toast.Header>
      <Toast.Body>
        <Link href={`/mints/${event.owner}`}>
          <Button variant="link">View User</Button>
        </Link>
      </Toast.Body>
    </Toast>
  )
}