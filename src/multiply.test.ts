import { multiply } from './multiply';

describe('multiply', () => {
  test('3 * 4 debe ser 12', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('5 * 6 debe ser 30', () => {
    expect(multiply(5, 6)).toBe(30);
  });

  test('5 * 0 debe ser 0', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  test('0 * 10 debe ser 0', () => {
    expect(multiply(0, 10)).toBe(0);
  });

  test('-3 * 4 debe ser -12', () => {
    expect(multiply(-3, 4)).toBe(-12);
  });

  test('-5 * -3 debe ser 15', () => {
    expect(multiply(-5, -3)).toBe(15);
  });

  test('2.5 * 4 debe ser 10', () => {
    expect(multiply(2.5, 4)).toBe(10);
  });
});