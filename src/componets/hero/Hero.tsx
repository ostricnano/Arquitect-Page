import { Carousel } from "react-bootstrap"
import './Hero.css'

interface HeroProps {
  heroData: {
    img: string
    title: string
    description: string
  }[]
}

export const Hero: React.FC<HeroProps> = ({
  heroData
}) => {
  return (
    <section id='home' className='hero-block' data-testid='hero'>
      <Carousel>
        {
          heroData?.map((item, index) => (
            <Carousel.Item key={index}>
              <img 
                src={item.img} 
                alt='First slide' 
                className='d-block w-100 hero-img'
              />
              <Carousel.Caption>
                <h3 className='title'>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </section>
  )
}
