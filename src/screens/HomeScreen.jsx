import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'

import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  const productList = useSelector((state) => state.productList)
  const { loading, products, error } = productList

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <>
      <h3 className='text-uppercase my-3'>Latest Products</h3>
      <Row>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          products?.map((product, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))
        )}
      </Row>
    </>
  )
}

export default HomeScreen
