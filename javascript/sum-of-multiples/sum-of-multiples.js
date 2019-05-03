const sumOfMultiples = (factors, limit) => {
  const multiples = new Set();
  for (const factor of factors) {
    for (let i = factor; i < limit; i+=factor) {
      multiples.add(i);
    }
  }
  return Array.from(multiples).reduce((accum, el) => accum + el, 0);
};

export { sumOfMultiples };
