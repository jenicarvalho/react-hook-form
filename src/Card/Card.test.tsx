import { render, screen } from '@testing-library/react';
import Card from './index';

test('renders paragraph ola', () => {
  //rederizar o componente a ser testado
  render(<Card />);
  // buscar um elemento atraves de tag, texto, data-testid, etc
  const paragraphElement = screen.getByTestId("paragraph");
  const animeElement = screen.getByText("goku");
  // esperar que algo ocorra 
  expect(paragraphElement).toHaveTextContent("Olá");
  expect(animeElement).toHaveClass("anime");
});
