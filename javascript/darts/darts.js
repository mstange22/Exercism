export const solve = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') return null;
  const d = Math.sqrt(x ** 2 + y ** 2);
  if (d > 10) return 0;
  if (d > 5) return 1;
  if (d > 1) return 5;
  return 10;
};