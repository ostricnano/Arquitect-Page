import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { ContactUs } from '../ContactUs'

describe('Contact Us', () => {
  beforeEach(()=>{
    render(<ContactUs />)
  })
  afterEach(cleanup)
  it('should render de component properly', ()=> {
    const sectionElement = screen.getByTestId('contact-id')
    expect(sectionElement).toBeDefined();
  })
  it('Should render the form inputs correctly', async () => {

    const firstNameElement = screen.getByLabelText(/First name/i)
    expect(firstNameElement).toBeDefined();

    const lastNameElement = screen.getByLabelText(/Last name/i)
    expect(lastNameElement).toBeDefined();

    const cityElement = screen.getByLabelText(/City/i)
    expect(cityElement).toBeDefined();

    const stateElement = screen.getByLabelText(/State/i)
    expect(stateElement).toBeDefined();

    const codeElement = screen.getByLabelText(/Zip Code/i)
    expect(codeElement).toBeDefined();

    const messageElement = screen.getByPlaceholderText(/Enter your message/i)
    expect(messageElement).toBeDefined();
  })

  it('Show validation errors', async () => {
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    
    expect(await screen.findByText(/Requirede/i)).toBeDefined();
    expect(screen.findByText(/City is required/i)).toBeDefined();
    expect(await screen.findByText(/City is required/i)).toBeDefined();
    expect(await screen.findByText(/State is required/i)).toBeDefined();
    expect(await screen.findByText(/Code is required/i)).toBeDefined();
    expect(await screen.findByText(/Message is required/i)).toBeDefined();
  })

  it('submit the form with valid data', async () => {

    fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/City/i), { target: { value: 'New York' } });
    fireEvent.change(screen.getByLabelText(/State/i), { target: { value: 'NY' } });
    fireEvent.change(screen.getByLabelText(/Zip code/i), { target: { value: '10001' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello there' } });

    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));

  })
})