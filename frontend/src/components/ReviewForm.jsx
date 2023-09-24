import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
// import 'css/stars.css'

function ReviewForm() {
  const [rating, setRating] = useState('')
  const [body, setBody] = useState('')

  const { id } = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const review = { rating, body }

    const response = await fetch(
      `http://localhost:3000/api/v1/places/${id}/reviews`,
      {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const data = await response.json()

    if (response.ok) {
      setRating('')
      setBody('')
    }
  }

  return (
    <>
      <h3>Leave a review</h3>
      <Form className="mb-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Range
            min={1}
            max={5}
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            onChange={(e) => setBody(e.target.value)}
            value={body}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default ReviewForm
