import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
// import products from '../data/products'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products')
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])
  return (
    <>
      <h3 className='text-uppercase my-3'>Latest Products</h3>
      <Row>
        {products?.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
