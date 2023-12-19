import convertHumanTime from '../src/converthumantime';

describe('Conversor tempo para humanos', () => {
  it('deve receber 0ms e converter para 0:00', () => {
    expect(convertHumanTime(0)).toEqual('0:00');
  });
  
  it('deve receber 1000ms e converter para 0:01', () => {
    expect(convertHumanTime(1000)).toEqual('0:01');
  });

  it('deve receber 11000ms e converter para 0:01', () => {
    expect(convertHumanTime(11000)).toEqual('0:11');
  });

  it('deve receber 60000ms e converter para 1:00', () => {
    expect(convertHumanTime(60000)).toEqual('1:00');
  });
});