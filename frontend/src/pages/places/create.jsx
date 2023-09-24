import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Create() {
  const [validated, setValidated] = useState(false)
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.checkValidity()) {
      event.stopPropagation()
    }

    setValidated(true)

    const place = { title, location, description, price, image }

    const response = await fetch('http://localhost:3000/api/v1/places', {
      method: 'POST',
      body: JSON.stringify(place),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()

    if (!response.ok) {
      setError(data.error)
    }

    if (response.ok) {
      setError(null)
      setTitle('')
      setLocation('')
      setDescription('')
      setPrice('')
      setImage('')
      console.log('Place created successfully!', data)
      navigate('/places')
    }
  }

  return (
    <>
      <h1 class="text-center">Add Place</h1>
      <div class="col-6 offset-3">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          enctype="multipart/form-data"
        >
          <Form.Group class="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill out this field.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group class="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              id="location"
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill out this field.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group class="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              required
            ></Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill out this field.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group class="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill out this field.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group class="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              // name="image"
              id="image"
              // accept="image/*"
              // multiple
              onChange={(e) => setImage(e.target.value)}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill out this field.
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" variant="success">
            Save
          </Button>
          {error && <p className="text-danger">{error}</p>}
        </Form>
      </div>
    </>
  )
}

export default Create
