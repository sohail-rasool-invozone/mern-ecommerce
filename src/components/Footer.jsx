import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
      <footer className='shadow'>
        <Container>
        <Row>
            <Col className='text-center py-3'>Copyright &copyright; Proshop</Col>
        </Row>
        </Container>
      </footer>
  )
}

export default Footer
