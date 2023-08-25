import { sum, sub, mult, div } from '../src/main'

describe('smoke tests', () => {
  it('should exists the method "sum"', () => {
    expect(sum).toBeInstanceOf(Function)
  });
  
  it('should exists the method "sub"', () => {
    expect(sub).toBeInstanceOf(Function)
  });

  it('should exists the method "mult"', () => {
    expect(mult).toBeInstanceOf(Function)
  });

  it('should exists the method "div"', () => {
    expect(div).toBeInstanceOf(Function)
  });

})

describe('calculadora testes', () => {
  describe('Sum', () => {
    it('should return 4 when "sum(2, 2)"', () => {
      expect(sum(2, 2)).toEqual(4);
    });
  })
  describe('Sub', () => {
    it('should return 2 when "sub(4, 2)"', () => {
      expect(sub(4, 2)).toEqual(2);
    });
  })
  describe('Mult', () => {
    it('should return 10 when "mult(2, 5)"', () => {
      expect(mult(2, 5)).toEqual(10);
    });
  })
  describe('Div', () => {
    it('should return 3 when "div(6, 2)"', () => {
      expect(div(6, 2)).toEqual(3);
    });
  })
})