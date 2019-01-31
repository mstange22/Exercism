export const classify = (n) => {
  if (n < 1) throw new Error('Classification is only possible for natural numbers.');
  const factors = [1];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      if (i !== Math.sqrt(n)) {
        factors.push(n / i);
      }
    }
  }
  const sum = factors.reduce((acc, f) => acc + f, 0);
  if (sum < n || sum === 1) return 'deficient';
  return sum === n ? 'perfect' : 'abundant';
}