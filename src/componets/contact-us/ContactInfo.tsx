import { Col, Container, Row } from "react-bootstrap"
import './ContactInfo.css'

export const ContactInfo = () => {
  return (
    <section id='contact-us' className="info-block">
      <Container>
        <Row>
          <Col sm={4}>
            <div className="card-info">
              <i className="fa-brands fa-whatsapp"></i>
              <p>+54 9 11 6523400</p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="card-info">
              <i className="fa-solid fa-location-dot"></i>
              <p>Juncal, Bs As, Argentina</p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="card-info">
              <i className="fa-regular fa-envelope"></i>
              <p>ostricmariano@gmail.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
