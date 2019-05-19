class Series {
  _digits: number[]

  constructor(series: string) {
    this._digits = [...series].map(Number)
  } 

  get digits() {
    return this._digits
  }

  slices(size: number) {
    if (size > this.digits.length) throw new Error();
    return new Array(this.digits.length - size + 1)
      .fill(0)
      .map((_, i) => this.digits.slice(i, i + size))
  }
}

export default Series