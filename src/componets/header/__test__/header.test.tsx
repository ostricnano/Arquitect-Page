import { screen, render, fireEvent } from '@testing-library/react';
import { Header } from '../Header';

describe('Header ',()=>{
  it('should render the component properly',async () => {
    render(<Header />)
    const header = screen.getAllByTestId('header')
    expect(header).toBeDefined()
  })
  it('renders Navbar and Nav links', async () => {
    render(<Header />);
    const navbarBrand = screen.getByText('M|A Architecs');
    expect(navbarBrand).toBeDefined();
  
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeDefined();
    
    const aboutUsLink = screen.getByText('Services');
    expect(aboutUsLink).toBeDefined();
  
    const projectsLink = screen.getByText('Projects');
    expect(projectsLink).toBeDefined();
  
    const contactsLink = screen.getByText('Contact-us');
    expect(contactsLink).toBeDefined();
  
    const clientsLink = screen.getByText('Our-Clients');
    expect(clientsLink).toBeDefined();
  });
  it('Navbar has correct class', () => {
    render(<Header />);
    const navbar = screen.getByRole('navigation');
    expect(navbar.className).toBe('bg-body-tertiary navbar navbar-expand-lg navbar-light');
  });
  it('Navbar toggle button works', () => {
    render(<Header />);
    const toggleButton = screen.getByLabelText('Toggle navigation');
    expect(toggleButton).toBeDefined();
  
    fireEvent.click(toggleButton);
    const navCollapse = screen.getByRole('navigation');
    console.log(navCollapse)
    expect(navCollapse.className).toBeDefined();
  });
})