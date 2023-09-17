import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
      <div className="container mt-5">
        <p>{place?.title}</p>
        <p>{place?.price}</p>
        <p>{place?.description}</p>
        <p>{place?.location}</p>
        <p>{place?.createdAt}</p>
      </div>
    </>
  )
}

export default Show
