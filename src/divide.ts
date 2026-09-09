export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}