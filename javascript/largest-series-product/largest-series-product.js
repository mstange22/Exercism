export const largestProduct = (str, num) => {
  if (num < 0) throw new Error('Invalid input.');
  if (num > str.length) throw new Error('Slice size is too big.');
  if (num === 0 && str === '') return 1;

  const series = str.split('').map(s => Number(s));
  return Math.max(...series
    .reduce((slices, _, i) => i < series.length - num + 1 ? [...slices, series.slice(i, i + num)] : slices, [])
    .reduce((prods, slice) => [
      ...prods,
      slice.reduce((prod, value) => {
        if (!/\d/.test(value)) throw new Error('Invalid input.');
        return prod * value;
      }, 1)
    ], []));
};
