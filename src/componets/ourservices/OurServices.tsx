import { Col, Container, Image, Row } from "react-bootstrap"
import './OurServices.css'
import { Title } from "../title/Title"

interface ServicesProps {
  serviceData:{
    img: string,
    title: string,
    description: string
  }[]
}

export const OurServices: React.FC<ServicesProps> = ({
  serviceData
}) => {
  return (
    <section id='service' className='block service-block' data-testid='service'>
      <Container fluid>
        <Title
          title='Our Services'
          subtitle='services we provide'
        />
        <Row className='servicelist'>
          {
            serviceData.map((service: any, index: number) => (
              <Col lg={3} key={index}>
                <div className="service-wrapper">
                  <Image src={service.img} alt="service-1" rounded />
                  <div className='label text-center'>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>

    </section>
  )
}
