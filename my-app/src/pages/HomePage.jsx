import React from 'react'
import { useQuery, gql } from '@apollo/client'

const REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        id,
        attributes {
          title,
          rating
        }
      }
    }
  }
`

export default function HomePage() {

  const {loading, error, data} = useQuery(REVIEWS)
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>


  console.log(data)

  return (
    <div>
      { data.reviews.data.map(review => (
        <div key={ review.id } className="review-card">
          <div className="rating">{ review.attributes.rating }</div>
          <h2>{ review.attributes.title }</h2>

          <small>console list</small>

          {/* <p>{ review.attributes.body }</p>
          <a to={`/details/${review.id}`}>Readmore</a> */}
        </div>
        
        
      ))}
    </div>
  )
}

