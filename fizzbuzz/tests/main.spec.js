/*
Desafio FizzBuzz
Escreva uma lib que receba um número e:
Se o número for divisível por 3, no lugar do número escreva 'Fizz' - X
Se o número for divisível por 5, no lugar do número escreva 'Buzz' - X
Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz' - X
Se não for múltiplo de nada, retorna o número
 */
import FizzBuzz from '../src/main'

describe('FizzBuzz', () => {
  it('Deve retornar `Fizz` quando múltiplo de 3', () => {
    expect(FizzBuzz(3)).toEqual('Fizz')
    expect(FizzBuzz(6)).toEqual('Fizz')
  })

  it('Deve retornar `Buzz` quando múltiplo de 5', () => {
    expect(FizzBuzz(5)).toEqual('Buzz')
    expect(FizzBuzz(10)).toEqual('Buzz')
  })

  it('Deve retornar `FizzBuzz` quando múltiplo de 3 e 5', () => {
    expect(FizzBuzz(15)).toEqual('FizzBuzz')
  })

  it('Se não for múltiplo de nada, retorna o número', () => {
    expect(FizzBuzz(7)).toEqual(7)
  })

})