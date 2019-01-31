export const primeFactors = (n) => {
  const factors = [];
  let factor = 2;
  while (n > 1) {
    while (n % factor == 0) {
      factors.push(factor);
      n /= factor;
    }
    factor++;
  }
  return factors;
}