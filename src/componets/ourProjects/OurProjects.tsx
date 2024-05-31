import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './OurProjects.css'
import { Title } from '../title/Title'

export interface ProjectProps {
  projectData: {
    id: number
    image: string,
    name: string,
    coleccion: string,
    ubicacion: string,
    area: string
  }[]
}

export const OurProjects: React.FC<ProjectProps> = ({
  projectData
}) => {
  return (
    <section id='projects' className='block project-block' data-testid='ourProjects'>
      <Container fluid>
          <Title
            title='Our projects'
            subtitle='Some of our projects'
          />
          <Row>
            {
              projectData?.map((project: any) => (
                <Col md={3} key={project.id}>
                  <Card style={{  marginBottom:'1rem' }}>
                    <Card.Img variant="top" src={project.image} />
                    <Card.Body>
                      <Card.Title>{project.name}</Card.Title>
                      <Card.Text>
                        <span>Colection:</span> {project.coleccion}
                      </Card.Text>
                      <Card.Text>
                        <span>Location:</span> {project.ubicacion}
                      </Card.Text>
                      <Card.Text>
                        <span>Area:</span> {project.area}
                      </Card.Text>
                      <Button variant="outline-secondary">View project</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Container>
    </section>
  )
}
