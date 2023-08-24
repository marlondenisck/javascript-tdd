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
})