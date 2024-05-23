import { Col, Container, Image, Row } from "react-bootstrap"
import { Title } from "../title/Title"
import './Teams.css'

interface TeamsProps {
  teamData: {
    id: number,
    image: string,
    links: {
      link: string
      icon: string
    }[],
    name: string,
    designation: string,
    description: string,
  }[]
}

export const Teams = ({ teamData }: TeamsProps) => {

  return (
    <section className="block teams-block">
      <Container fluid>
        <Title title='Our teams' subtitle='some of our experts'/>
        <Row>
          {
            teamData.map(team => (
              <Col sm={3} key={team.id}>
                <div className="image">
                  <Image src={team.image} />
                  <div className="overlay">
                    <div className="socials">
                      <ul>
                        {
                          team.links.map((link, index) => (
                            <li key={index}>
                              <a href={link.link}>
                                <i className={link.icon}></i>
                              </a>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='content'>
                  <h3>{team.name}</h3>
                  <span className='designation'>{team.designation}</span>
                  <p>{team.description}</p>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}
