import { Card } from 'react-bootstrap'

function ReviewCard({ review }) {
  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <Card.Text>Rating: {review.rating}</Card.Text>
          <Card.Text>{review.body}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default ReviewCard
