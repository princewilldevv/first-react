import c1 from '../img/c1.jpg';
import { Container, Row, Col, Button , Card} from 'react-bootstrap';
const Cardos = () => {
  return (
    <Container className='container-fluid mt-5' >
    <Row>
     <Col className='col-lg-3 col-md-4 col-12'>
      <Card  style={{ width: '18rem', marginBottom: '20px'}}>
      <Card.Img variant="top" src={c1}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className='col-lg-3 col-md-4 col-12'>
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src={c1}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className='col-lg-3 col-md-4 col-12'>
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src={c1}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src={c1}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
  )
}

export default Cardos
