import { render, screen } from '@testing-library/react';
import {OurProjects} from '../OurProjects';

const projectData = [
  {
    id: 1,
    image: './images/project-01.jpg',
    name: 'Casa A',
    coleccion: 'Colección: Anfega Arquitectura',
    ubicacion: 'Ubicación: Ciudad de México',
    area: 'Área de Construcción: 120.78m2'
  },
]
describe('OurProjects', () => {
  test('renders OurProjects component', () => {
    render(
      <OurProjects projectData={projectData} />
  );
    const ourProjects = screen.getByTestId('ourProjects');
    expect(ourProjects).toBeDefined();
  });
})
