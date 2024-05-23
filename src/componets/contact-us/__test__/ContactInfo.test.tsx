import { screen, render } from '@testing-library/react'
import { ContactInfo } from '../ContactInfo'

describe('Contact info', () => {
  it('Should render the component correctly', () => {
    render(<ContactInfo/>)
  })
})