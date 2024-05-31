import { Col, Container, Image, Row } from "react-bootstrap"
import { Title } from "../title/Title"
import { motion } from "framer-motion";
import './OurServices.css'
import useInView from "../../custom-hooks/useInView";

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
  const [ref, isInView] = useInView({
    threshold: 0.1  // Ajusta el umbral según sea necesario
  });
  return (
    <div 
      id='service' 
      className='block service-block' 
      data-testid='service'

    >
      <Container fluid>
        <Title
          title='Our Services'
          subtitle='services we provide'
        />
        <Row className='servicelist'>
          {
            serviceData.map((service: any, index: number) => (
              <Col sm={3} key={index}>
                <motion.div className="service-wrapper"
                  ref={ref}  // Añade la referencia al contenedor
                  initial={{ opacity: 0.5, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}  // Inicia la animación solo si está en vista
                  transition={{
                    duration: 2,
                    delay: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                >
                  <Image src={service.img} alt="service-1" rounded />
                  <div className='label text-center'>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </motion.div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}
