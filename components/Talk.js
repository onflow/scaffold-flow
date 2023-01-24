import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export function Talk({body}) {
  const openShareLink = () => {
    const profileUrl = 'TODO'
    const content = `I just minted a talk on the Flow Blockchain! Check it out: ${profileUrl} #BlockTalk`
    const link = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(content)
    window.open(link)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Text>
            {body}
          </Card.Text>
          <Button variant="primary" onClick={openShareLink}>Share</Button>
        </Card.Body>
      </Card>
      <br />
    </>
  )
}