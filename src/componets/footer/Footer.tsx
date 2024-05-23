import { Container } from 'react-bootstrap'
import './Footer.css'
import { useEffect, useState } from 'react'
export const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  })

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <footer id='footer'>
      <Container fluid>
        <div className='copyright'>
          © 2022 Corporate. All Right Reserved.
        </div>
        <div className='socials-footer'>
        <ul>
          <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
      </Container>
      {
        showTopBtn && (
          <div 
            className="go-top" 
            data-testid='scroll-button' 
            onClick={goTop}
          >
          </div>
        )
      }

    </footer>
  )
}
