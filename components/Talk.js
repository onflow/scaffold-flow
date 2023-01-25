import Card from 'react-bootstrap/Card'

export function Talk({body}) {

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Text>
            {body}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  )
}