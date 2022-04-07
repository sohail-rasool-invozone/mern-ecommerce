import Header from './components/Header'
import Footer from './components/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <div>
          <Header />
          <main className='py-3'>
            <Container>
              <Row>
                <Col>
                  <Routes>
                    <Route path='/' element={<HomeScreen />} exact />
                    <Route path='/product/:id' element={<ProductScreen />} />
                  </Routes>
                </Col>
              </Row>
            </Container>
          </main>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
