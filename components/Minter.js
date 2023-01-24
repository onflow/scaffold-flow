import * as fcl from '@onflow/fcl'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { useReducer, useState } from 'react'
import CreateTalk from '../cadence/transactions/CreateTalk.cdc'
import TweetsModal from '../components/TweetsModal'
import { useSession, signIn } from 'next-auth/react'

export function Minter({ onMint }) {
  const [mintData, setMintData] = useReducer(
    (data, newData) => ({ ...data, ...newData }),
    { text: '', tweetID: null }
  )
  const [showAlert, setShowAlert] = useState(false)

  // Twitter Session
  const session = useSession()
  const twitterUser = session?.data?.user

  // Tweets Modal State
  const [showTweetsModal, setShowTweetsModal] = useState(false)
  const handleTweetsModalClose = () => setShowTweetsModal(false)
  const handleTweetsModalShow = () => {
    if (!twitterUser) {
      signIn()
    } else {
      setShowTweetsModal(true)
    }
  }

  const onSelect = data => {
    handleTweetsModalClose()
    setMintData({ text: data?.text, tweetID: data?.id })
  }

  const onTextChange = event => {
    setMintData({ text: event.target.value })
    setShowAlert(false)
  }

  const onSubmit = async () => {
    if (!mintData?.text.length) {
      setShowAlert(true)
      return
    }

    await fcl.mutate({
      cadence: CreateTalk,
      args: (arg, t) => [
        arg(mintData?.text, t.String),
        arg(mintData?.tweetID, t.Optional(t.String))
      ]
    })

    setShowAlert(false)
    setMintData({ text: '' })
    onMint()
  }

  return (
    <div>
      <TweetsModal 
        show={showTweetsModal} 
        handleClose={handleTweetsModalClose}
        onSelect={onSelect} />
      {showAlert && 
        <Alert key='danger' variant='danger'>
          You have to write something. Can you block the talk?
        </Alert>
      }
      <br />
      <FloatingLabel controlId="floatingTextarea2" label="What do you want to say?">
        <Form.Control
          as="textarea"
          placeholder="Talk to the block"
          style={{ height: '100px' }}
          maxLength={280}
          onChange={onTextChange}
          defaultValue={mintData?.text}
        />
      </FloatingLabel>
      <br />
      <Button onClick={handleTweetsModalShow}>Select Tweet to Mint</Button>{' '}
      <Button onClick={onSubmit}>Mint It</Button>
    </div>
  )
}