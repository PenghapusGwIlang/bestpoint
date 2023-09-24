import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const CardToRight = ({ place }) => {
  return (
    <Card className="mb-3">
      <Row>
        <Col md={4}>
          <Card.Img src={place.image} className="img-fluid" />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{place.title}</Card.Title>
            <Card.Text>{place.description}</Card.Text>
            <Card.Text>
              <small>{place.location}</small>
            </Card.Text>
            <Button variant="primary" as={Link} to={`/places/${place._id}`}>
              View {place.title}
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default CardToRight
