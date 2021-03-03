import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //rederizar o componente a ser testado
  render(<App />);
  // buscar um elemento atraves de tag, texto, id etc
  const linkElement = screen.getByText(/learn react/i);
  // esperar que algo ocorra 
  expect(linkElement).toBeInTheDocument();
});
