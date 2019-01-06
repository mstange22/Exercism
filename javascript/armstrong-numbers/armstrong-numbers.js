export const validate = (n) => {
  const digits = n.toString().split('');
  return digits.reduce((sum, d) => sum += d ** digits.length, 0) === n;
};