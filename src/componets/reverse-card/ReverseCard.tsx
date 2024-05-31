import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Title } from '../title/Title'
import { ProjectProps } from '../ourProjects/OurProjects'
import './ReverseCard.css'


export const ReverseCard = ({
  projectData
}: ProjectProps) => {
  return (
    <section  className="block reverse-card-block">
      <Container fluid>
        <Title title='Others projects' subtitle='Our most relevant projects' />
        <Row>
          {
            projectData.map((project: any) => (
              <Col md={3} key={project.id}>
                <div className="project-card">
                  <div className="card-front">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <div className="card-back">
                    <img className='back-img' src={project.image} alt={project.name} />
                    <div className='back-list-content'>
                      <ListGroup>
                        <ListGroup.Item>Colection:<span>{project.coleccion}</span></ListGroup.Item>
                        <ListGroup.Item>Location:<span>{project.ubicacion}</span></ListGroup.Item>
                        <ListGroup.Item>Area:<span>{project.area}</span></ListGroup.Item>
                      </ListGroup>
                    </div>
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
