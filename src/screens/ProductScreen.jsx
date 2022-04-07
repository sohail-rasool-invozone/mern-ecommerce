import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Image, Col, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { listProductDetails } from '../actions/productActions'

import Message from '../components/Message'
import Loader from '../components/Loader'

const ProductScreen = () => {
  const [qty, setQty] = useState(1)

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)

  const { product, error, loading } = productDetails
  const { name, image, description, price, countInStock, rating, numReviews } =
    product

  const paramId = params.id

  useEffect(() => {
    dispatch(listProductDetails(paramId))
  }, [dispatch, paramId])
  const addToCartHandler = () => {
    navigate(`/cart/${paramId}?qty=${qty}`)
  }
  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
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
                {countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
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
      )}
    </>
  )
}

export default ProductScreen
