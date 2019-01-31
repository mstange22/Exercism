export default ({ minFactor: min = 1, maxFactor: max}) => {
  const p = {
    smallest: { value: Infinity, factors: [] },
    largest: { value: 0, factors: [] },
  }

  for (let i = min; i <= max; i++) {
    for (let j = i; j <= max; j++) {
      const prod = i * j;
      // is prod largest or smallest?
      if (prod <= p.smallest.value || prod >= p.largest.value) {
        // is prod a palindrome?
        const prodString = (i * j).toString();
        if (prodString.split('').reverse().join('') === prodString) {
          if (prod <= p.smallest.value) {
            p.smallest.value = prod
            p.smallest.factors = [i, j];
          } else if (prod >= p.largest.value) {
            p.largest.value = prod
            p.largest.factors = [i, j];
          } else if (prod === p.largest.value) {
            p.largest.value = prod;
            p.largest.factors = [[p.largest.factors], [i, j]];
          } else {
            p.smallest.value = prod;
            p.smallest.factors = [[p.smallest.factors], [i, j]];
          }
        }
      }
    }
  }
  return p;
}