import Header from './components/Header'
import Footer from './components/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceorderScreen from './screens/PlaceorderScreen'
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
                    <Route path='/palceorder' element={<PlaceorderScreen />} />
                    <Route path='/payment' element={<PaymentScreen />} />
                    <Route path='/shipping' element={<ShippingScreen />} />
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/register' element={<RegisterScreen />} />
                    <Route path='/profile' element={<ProfileScreen />} />
                    <Route path='/' element={<HomeScreen />} exact />
                    <Route path='/product/:id' element={<ProductScreen />} />
                    <Route path='/cart' element={<CartScreen />} />
                    <Route path='/cart/:id' element={<CartScreen />} />
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
