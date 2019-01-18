export default class ISBN {
// class ISBN {
  constructor(num) {
    this.num = num.split('')
      .filter((n, i) => (n >= '0' && n <= '9') || (i === num.length - 1 && n === 'X'))
      .map(n => n === 'X' ? 10 : Number(n))
    this.sum = this.num.reduce((sum, n, i) => sum + (n * (i + 1)), 0);
  }

  isValid() {
    return this.num.length === 10 && this.sum % 11 === 0;
  }
}