import { Container, Form, Row, Col, Button} from 'react-bootstrap';
import logo from '../logo.svg';
const Footeros = () => {
  return (
    <footer className="bg-dark p-2  mt-3">
  <Container className="container-fluid mt-5 mb-5 ">
  <Row>
    <Col className="col-lg-3 col-md-4 col-12">
      <div className="p-3" style={{display: 'flex'}}>
     
        <img
          className=""
          src={logo}
          alt="Blog Logo"
          width="50px"
          height="50px"

        />
        <h4 className='text-light' style={{paddingTop: '12px'}}>Princewill Blog</h4>
        </div>
        <div>
        <p className="text-light">So this a sample of a Footer in React JS and its fun to learn Coding in JSX</p>
      </div>
    </Col>
    <Col className="col-lg-3 col-md-4 col-12">
      <div className="p-3">
        <h3 className="text-light">Contact US</h3>
        <p className="text-light">So this a sample of a Footer in React JS and its fun to learn Coding in JSX</p>
      </div>
    </Col>
    <Col className="col-lg-3 col-md-4 col-12">
      <div className="p-3">
        <h3 className="text-light">Address</h3>
        <p className="text-light">So this a sample of a Footer in React JS and its fun to learn Coding in JSX</p>
      </div>
    </Col>
    <Col className="col-lg-3 col-md-4 col-12">
      <div className="p-3">
        <h3 className="text-light">Subscribe</h3>

        <Form>
    
          <Form.Group controlId='formEmail'>
          <Form.Label className='text-light'>Email Address</Form.Label>
          <Form.Control type='email' placeholder='Example@email.com'  />
          <Form.Text className='text-light'>
            We'll never share your data with third party.
          </Form.Text>
          </Form.Group>
  
        
        
        <Button variant='warning' type='submit'>Submit</Button>
      </Form>
        
      </div>
    </Col>
    </Row>
  </Container>
</footer>
  )
}

export default Footeros
