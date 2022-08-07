import Carousel from 'react-bootstrap/Carousel';
import b1 from '../img/b1.jpg';
import b2 from '../img/b2.jpg';
import b3 from '../img/b3.jpg';
const Carouselos = () => {
  return (
    <Carousel >
      <Carousel.Item style={{maxHeight: '400px'}}>
        <img
          className="d-block w-100"
          src={b1}
          alt="First slide"
          width="100%"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight: '400px'}}>
        <img
          className="d-block w-100"
          src={b2}
          alt="Second slide"
          width="100%"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight: '400px'}}>
        <img
          className="d-block w-100"
          src={b3}
          alt="Third slide"
          width="100%"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carouselos
