import { useEffect, useState } from 'react'
import CardToRight from '../../components/CardToRight'

function Index() {
  const [places, setPlaces] = useState(null)

  useEffect(() => {
    const fetchPlaces = async () => {
      const response = await fetch('http://localhost:3000/api/v1/places')
      const data = await response.json()

      if (response.ok) {
        setPlaces(data)
      }
    }

    fetchPlaces()
  }, [])

  return (
    <>
      <main className="container mt-5">
        <h1>All Places</h1>
        <div className="places">
          {places &&
            places.map((place) => (
              <CardToRight key={place._id} place={place} />
            ))}
        </div>
      </main>
      {/* <div id="mapContainer" style={'width: 100%; height: 100vh'}></div> */}
    </>
  )
}

export default Index
