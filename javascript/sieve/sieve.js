export const primes = (n) => {
  const res = [];
  const marked = new Set();

  for (let i = 2; i <= n; i++) {
    if (!marked.has(i)) {
      res.push(i);
      for (let j = i; j <= n; j += i) {
        marked.add(j);
      }
    }
  }
  return res;
}