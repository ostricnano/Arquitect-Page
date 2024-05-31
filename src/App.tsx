
import { ContactUs } from './componets/contact-us/ContactUs'
import { Footer } from './componets/footer/Footer'
import { Header } from './componets/header/Header'
import { Hero } from './componets/hero/Hero'
import { OurProjects } from './componets/ourProjects/OurProjects'
import { OurServices } from './componets/ourservices/OurServices'
import { Teams } from './componets/ourteam/Teams'
import { motion, useScroll, useSpring } from "framer-motion";
import './App.css'
import { Testimonials } from './componets/testimonials/Testimonials'
import { ReverseCard } from './componets/reverse-card/ReverseCard'

const heroData = [
  {
    img: './images/hero-2.jpg',
    title: 'Lorem, ipsum dolor.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos numquam laudantium qui ex beatae eum laboriosam ipsum totam? Iure error nisi molestias eligendi repellendus? Ipsam modi odio est quae voluptatem.'
  },
  {
    img: './images/hero-1.jpg',
    title: 'Lorem, ipsum dolor.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos numquam laudantium qui ex beatae eum laboriosam ipsum totam? Iure error nisi molestias eligendi repellendus? Ipsam modi odio est quae voluptatem.'
  },
  {
    img: './images/hero-3.jpg',
    title: 'Lorem, ipsum dolor.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos numquam laudantium qui ex beatae eum laboriosam ipsum totam? Iure error nisi molestias eligendi repellendus? Ipsam modi odio est quae voluptatem.'
  }
]

const serviceData = [
  {
    img: './images/services-01.jpg',
    title: 'Service Title',
    description: 'Lorem ipsum'
  },
  {
    img: './images/services-02.jpg',
    title: 'Service Title',
    description: 'Lorem ipsum'
  },
  {
    img: './images/services-03.jpg',
    title: 'Service Title',
    description: 'Lorem ipsum'
  },
  {
    img: './images/services-04.jpg',
    title: 'Service Title',
    description: 'Lorem ipsum'
  }
]

const projectData = [
  {
    id: 1,
    image: './images/project-01.jpg',
    name: 'CASA MA-2',
    coleccion: 'Anfega Arquitectura',
    ubicacion: 'Ciudad de México',
    area: '120.78m2'
  },
  {
    id: 2,
    image: './images/project-02.jpg',
    name: 'CASA RS',
    coleccion: 'Anfega Arquitectura',
    ubicacion: 'Ciudad de México',
    area: 'PB: 165.05 m2 | PA: 161.7 m2'
  },
  {
    id: 3,
    image: './images/project-03.jpg',
    name:'CASA ML',
    coleccion: 'Anfega Arquitectura',
    ubicacion: 'Ciudad de México',
    area: 'PB: 129 m2 | PA: 114.71 m2'
  },
  {
    id: 4,
    image: './images/project-04.jpg',
    name:'CASA RIVERA',
    coleccion: 'Anfega Arquitectura',
    ubicacion: 'Ciudad de México',
    area: '267.88 m2'
  },
]
const teamsData = [
  {
    id: 1,
    image: './images/team1.jpg',
    links: [
      {
        link: 'https://www.facebook.com',
        icon: "fab fa-facebook-f"
      },
      {
        link: 'https://www.twitter.com',
        icon: "fab fa-twitter"
      },
      {
        link: 'https://www.linkedin.com',
        icon: "fab fa-linkedin-in"
      },
    ],
    name: 'Gabriel Hart',
    designation: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.',
  },
  {
    id: 2,
    image: './images/team2.jpg',
    links: [
      {
        link: 'https://www.facebook.com',
        icon: "fab fa-facebook-f"
      },
      {
        link: 'https://www.twitter.com',
        icon: "fab fa-twitter"
      },
      {
        link: 'https://www.linkedin.com',
        icon: "fab fa-linkedin-in"
      },
    ],
    name: 'David Antony',
    designation: 'Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 3,
    image: './images/team3.jpg',
    links: [
      {
        link: 'https://www.facebook.com',
        icon: "fab fa-facebook-f"
      },
      {
        link: 'https://www.twitter.com',
        icon: "fab fa-twitter"
      },
      {
        link: 'https://www.linkedin.com',
        icon: "fab fa-linkedin-in"
      },
    ],
    name: 'Nicholas Perry',
    designation: 'UX Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 4,
    image: './images/team4.jpg',
    links: [
      {
        link: 'https://www.facebook.com',
        icon: "fab fa-facebook-f"
      },
      {
        link: 'https://www.twitter.com',
        icon: "fab fa-twitter"
      },
      {
        link: 'https://www.linkedin.com',
        icon: "fab fa-linkedin-in"
      },
    ],
    name: 'Sarah Wills',
    designation: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 5,
    image: './images/team5.jpg',
    links: [
      {
        link: 'https://www.facebook.com',
        icon: "fab fa-facebook-f"
      },
      {
        link: 'https://www.twitter.com',
        icon: "fab fa-twitter"
      },
      {
        link: 'https://www.linkedin.com',
        icon: "fab fa-linkedin-in"
      },
    ],
    name: 'Sophia Pitt',
    designation: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 6,
    image: './images/team6.jpg',
    links: [
      {
        link: 'https://www.facebook.com',
        icon: "fab fa-facebook-f"
      },
      {
        link: 'https://www.twitter.com',
        icon: "fab fa-twitter"
      },
      {
        link: 'https://www.linkedin.com',
        icon: "fab fa-linkedin-in"
      },
    ],
    name: 'Taylor Lopez',
    designation: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 7,
    image: './images/team7.jpg',
    links: [
      {
        link: 'https://www.facebook.com',
        icon: "fab fa-facebook-f"
      },
      {
        link: 'https://www.twitter.com',
        icon: "fab fa-twitter"
      },
      {
        link: 'https://www.linkedin.com',
        icon: "fab fa-linkedin-in"
      },
    ],
    name: 'Ryan Giggs',
    designation: 'Content Writer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 8,
    image: './images/team8.jpg',
    links: [
      {
        link: 'https://www.facebook.com',
        icon: "fab fa-facebook-f"
      },
      {
        link: 'https://www.twitter.com',
        icon: "fab fa-twitter"
      },
      {
        link: 'https://www.linkedin.com',
        icon: "fab fa-linkedin-in"
      },
    ],
    name: 'David Smith',
    designation: 'SEO Expert',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  }
]

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* ver porque no anda */}
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div>
        <Header />
        <main>
          <Hero heroData={heroData}/>  
          <OurServices serviceData={serviceData} />
          <OurProjects projectData={projectData} />
          <ReverseCard projectData={projectData}/>
          <Teams teamData={teamsData} />
          <Testimonials />
          <ContactUs />
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
