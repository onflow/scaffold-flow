import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { useState } from 'react'

export function MintModal(props) {
  const [mintText, setMintText] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const onTextChange = event => {
    setMintText(event.target.value)
    setShowAlert(false)
  }
  
  const onSubmit = () => {
    if (!mintText.length) {
      setShowAlert(true)
      return
    }

    setShowAlert(false)
    setMintText('')
    props.onHide()
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Talk to the Block
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showAlert && 
          <Alert key='danger' variant='danger'>
            You have to write something. Can you block the talk?
          </Alert>
        }
        <FloatingLabel controlId="floatingTextarea2" label="What do you want to say?">
        <Form.Control
          as="textarea"
          placeholder="Talk to the block"
          style={{ height: '100px' }}
          maxLength={280}
          onChange={onTextChange}
        />
      </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onSubmit}>Mint It</Button>
      </Modal.Footer>
    </Modal>
  )
}