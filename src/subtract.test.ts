import { subtract } from './subtract';

describe('subtract', () => {
  test('5 - 3 debe ser 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('10 - 4 debe ser 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('5 - 0 debe ser 5', () => {
    expect(subtract(5, 0)).toBe(5);
  });

  test('0 - 5 debe ser -5', () => {
    expect(subtract(0, 5)).toBe(-5);
  });

  test('-5 - 3 debe ser -8', () => {
    expect(subtract(-5, 3)).toBe(-8);
  });

  test('5 - (-3) debe ser 8', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('3 - 10 debe ser -7', () => {
    expect(subtract(3, 10)).toBe(-7);
  });
});