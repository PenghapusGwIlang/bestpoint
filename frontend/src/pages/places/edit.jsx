import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Edit() {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <>
      <h1 class="text-center">Edit Place</h1>
      <div class="col-6 offset-3">
        <Form
          action="/places"
          method="POST"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          enctype="multipart/form-data"
        >
          <Form.Group class="mb-3">
            <label for="title" class="form-label">
              Title
            </label>
            <Form.Control
              type="text"
              name="place[title]"
              id="title"
              class="form-control"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill out this field.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group class="mb-3">
            <label for="location" class="form-label">
              Location
            </label>
            <input
              type="text"
              name="place[location]"
              id="location"
              class="form-control"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill out this field.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group class="mb-3">
            <label for="description" class="form-label">
              Description
            </label>
            <textarea
              name="place[description]"
              id="description"
              class="form-control"
              required
            ></textarea>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill out this field.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group class="mb-3">
            <label for="price" class="form-label">
              Price
            </label>
            <input
              type="text"
              name="place[price]"
              id="price"
              class="form-control"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please fill out this field.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group class="mb-3">
            <label for="image" class="form-label">
              Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              class="form-control"
              multiple
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
        </Form>
      </div>
    </>
  )
}

export default Edit
