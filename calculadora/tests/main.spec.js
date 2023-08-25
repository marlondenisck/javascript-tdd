const calc = require('../src/main');


// test('adds 1 + 2 to equal 3', () => {
//   expect(soma(1, 2)).toBe(3);
// });


describe('calc', () => {

  describe('smoke tests', () => {
    it('should exist the calc lib', () => {
        expect(calc).toBeInstanceOf(Object)
    });

    it('should exists the method "sum"', () => {
      expect(calc.sum).toBeInstanceOf(Function)
    });
    
    it('should exists the method "sub"', () => {
      expect(calc.sub).toBeInstanceOf(Function)
    });

    it('should exists the method "mult"', () => {
      expect(calc.mult).toBeInstanceOf(Function)
    });

    it('should exists the method "div"', () => {
      expect(calc.div).toBeInstanceOf(Function)
    });

  })

  describe('Sum', () => {
    it('should return 4 when "sum(2, 2)"', () => {
      expect(calc.sum(2, 2)).toEqual(4);
    });
  })
  describe('Sub', () => {
    it('should return 2 when "sub(4, 2)"', () => {
      expect(calc.sub(4, 2)).toEqual(2);
    });
  })
  describe('Mult', () => {
    it('should return 10 when "mult(2, 5)"', () => {
      expect(calc.mult(2, 5)).toEqual(10);
    });
  })
  describe('Div', () => {
    it('should return 3 when "div(6, 2)"', () => {
      expect(calc.div(6, 2)).toEqual(3);
    });
  })
})