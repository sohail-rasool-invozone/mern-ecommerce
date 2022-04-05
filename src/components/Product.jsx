import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  const {
    _id,
    name,
    image,
    rating,
    numReviews,
    price
  } = product
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${_id}`}>
        <Card.Img variant='top' src={image} alt={name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title>{name}</Card.Title>
        </Link>
        <Rating value={rating} text={`${numReviews} Reviews`} />
        <Card.Text as='h3'>{price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
