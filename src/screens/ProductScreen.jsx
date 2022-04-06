import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Image, Col, ListGroup, Card, Button } from 'react-bootstrap'
// import products from '../data/products'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom'

const ProductScreen = () => {
  const params = useParams()
  const [product, setProduct] = useState([])
  const paramId = params.id
  const { name, image, description, price, countInStock, rating, numReviews } =
    product

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${paramId}`)
        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduct()
  }, [paramId])
  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={image} alt={name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={rating} text={`${numReviews} Reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Price:</strong> {price}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong> {description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>{price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{countInStock > 0 ? 'In stock' : 'Out of Stock'}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn btn-block w-100'
                  disabled={countInStock === 0}
                  type='button'
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
