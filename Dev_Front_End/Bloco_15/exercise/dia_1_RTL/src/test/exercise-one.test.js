import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const {getByText} = render(<App />);
    // const button = getByTestId('btnAdd')
    const textAdd = getByText('Adicionar');

    // expect(button).toBeInTheDocument();
    expect(textAdd).toBeInTheDocument();
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const {getByLabelText,queryByText} = render(<App />);
    const btnText = queryByText('Adicionar')
    const inputText = getByLabelText('Tarefa:')
    fireEvent.change(inputText, { target: { value: 'Fazer exercicios' } } );
    fireEvent.click(btnText);

    expect(inputText).toHaveValue('');
    expect(btnText).toBeInTheDocument('Fazer exercicios');

  });
});
