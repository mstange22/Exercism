export const largestProduct = (series, num) => {
  if (num < 0) throw new Error('Invalid input.');
  if (num > series.length) throw new Error('Slice size is too big.');

  let max = 0;
  const arr = series.split('').map(s => Number(s));

  for (let i = 0; i < arr.length - num + 1; i++) {
    const prod = arr
      .slice(i, i + num)
      .reduce((acc, value) => {
        if (!/\d/.test(value)) throw new Error('Invalid input.');
        return acc * value; 
      }, 1);
    if (prod > max) max = prod;
  }

  return max;
};
