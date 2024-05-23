import { screen, render } from '@testing-library/react';
import { Hero } from '../Hero';

const heroData = [
  {
    img: 'Test',
    title: 'Test',
    description: 'Test'
  }
]

describe('Hero ',()=>{
  it('Should render the component properly',async () => {
    render(
    <Hero 
      heroData={heroData}
    />
  )
    const hero = screen.getAllByTestId('hero')
    expect(hero).toBeDefined()
  })
})