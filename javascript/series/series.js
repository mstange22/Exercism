class Series {
  constructor(series) {
    this.digits = series.split('').map(d => Number(d));
  }
  slices(num) {
    if (num > this.digits.length) throw new Error('Slice size is too big.');
    return this.digits.reduce((acc, d, i) => {
      return i < this.digits.length - num + 1 ? [...acc, this.digits.slice(i, i + num)] : acc;
    }, [])
  }
}

export default Series;