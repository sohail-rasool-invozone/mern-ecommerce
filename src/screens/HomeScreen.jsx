import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../data/products'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <>
      <h3 className='text-uppercase my-3'>Latest Products</h3>
      <Row>
        {products.map((product,index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
