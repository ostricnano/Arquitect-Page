import { render, screen } from '@testing-library/react'
import { OurServices } from '../OurServices'

describe('Contact Us', ()=>{
  const serviceData = [
    {
      img:'asas',
      title:'asas',
      description:'asas'
    }
  ]
  it('should render de component properly', ()=> {
    render(
    <OurServices 
      serviceData={serviceData}
    />
  )
    const sectionElement = screen.getByTestId('service')
    expect(sectionElement).toBeDefined();
  })

})