import { render, screen } from '@testing-library/react';
import Button from './index';

test('renders lindo botao', () => {
  //rederizar o componente a ser testado
  render(<Button />);
  // buscar um elemento atraves de tag, texto, data-testid, etc
  const buttonElement = screen.getByTestId("myButton");
  // esperar que algo ocorra 
  expect(buttonElement).toHaveTextContent("Lindo botão");
});
