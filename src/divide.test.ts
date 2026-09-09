import { divide } from './divide';

describe('divide', () => {
  test('10 / 2 debe ser 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('20 / 4 debe ser 5', () => {
    expect(divide(20, 4)).toBe(5);
  });

  test('0 / 5 debe ser 0', () => {
    expect(divide(0, 5)).toBe(0);
  });

  test('-10 / 2 debe ser -5', () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test('-10 / -2 debe ser 5', () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test('5 / 0 debe lanzar un error', () => {
    expect(() => divide(5, 0)).toThrow();
  });

  test('5 / 2 debe ser 2.5', () => {
    expect(divide(5, 2)).toBe(2.5);
  });
});