export default class Series {
  private _series: string;

  constructor(series: string) {
    this._series = series;
  }

  largestProduct = (size: number): number => {
    let largest = 0;
    if (size < 0) {
      throw new Error('Invalid input.')
    }
    if (size > this._series.length) {
      throw new Error('Slice size is too big.')
    }
    for (let i = 0; i < this._series.length - size + 1; i++) {
      let prod = 1;
      for (let j = i; j < i + size; j++) {
          if (/[^0-9]/.test(this._series[j])) {
            throw new Error('Invalid input.')
          }
          prod = prod *= Number(this._series[j]);
      }
      if (prod > largest) {
        largest = prod;
      }
    }
    return largest;
  }
}