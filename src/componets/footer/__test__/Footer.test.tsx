import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

vi.spyOn(window, 'scrollTo')

describe('Footer component', () => {
  it('Sholud render de componente properly', async () => {
    render(<Footer />)
  })
  it('Sholud scroll to top if the user click it', async () => {
    render(<Footer />)
    //Initially, the button should not be visible
    expect(screen.queryByTestId('scroll-button')).toBeNull()

    //simulate scrolling down
    fireEvent.scroll(window, { target: { scrollY: 500 }})
    //Now, the button should be visible
    expect(screen.queryByTestId('scroll-button')).toBeDefined();

    //Simulate scrolling back up
    fireEvent.scroll(window, {target: { scrollY: 300 }})
    expect(screen.queryByTestId('scroll-button')).toBeNull();
  })
})