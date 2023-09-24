import { Card, Button, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function CardToBottom({ place }) {
  const handleClick = async () => {
    const response = await fetch(
      `http://localhost:3000/api/v1/places/${place._id}`,
      {
        method: 'DELETE',
      }
    )
    const data = await response.json()

    if (response.ok) {
      navigate('/places')
    }
  }

  const navigate = useNavigate()

  return (
    <Card>
      <Card.Img variant="top" src={place.image} />
      <Card.Body>
        <Card.Title>{place.title}</Card.Title>
        <Card.Text>{place.description}</Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>{place.location}</ListGroup.Item>
        <ListGroup.Item>{place.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex flex-row gap-1">
        <Card.Link
          className="btn btn-warning text-white"
          href={`/places/${place._id}/edit`}
        >
          Edit
        </Card.Link>
        <Button variant="danger" onClick={handleClick}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CardToBottom
