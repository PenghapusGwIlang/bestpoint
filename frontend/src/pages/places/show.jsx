import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import CardToBottom from '../../components/CardToBottom'
import ReviewForm from '../../components/ReviewForm'
import ReviewCard from '../../components/ReviewCard'

const Show = () => {
  const [place, setPlace] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    const fetchPlace = async () => {
      const response = await fetch(`http://localhost:3000/api/v1/places/${id}`)
      const data = await response.json()

      if (response.ok) {
        setPlace(data)
      }
    }

    fetchPlace()
  }, [])

  return (
    <>
      <main className="container mt-5">
        <Row className="mb-5">
          <Col className="col-6">{place && <CardToBottom place={place} />}</Col>
          <Col className="col-6">
            <ReviewForm />
            {place &&
              place.reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
          </Col>
        </Row>
      </main>
    </>
  )
}

export default Show
