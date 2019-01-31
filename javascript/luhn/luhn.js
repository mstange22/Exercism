export class Luhn {
  constructor(num) {
    const sum = num.split('')
      .filter(n => n != ' ')
      .map(n => Number(n))
      .reverse()
      .reduce((accum, d, i) => {
        if (i % 2 == 1) {
          const prod = d * 2;
          if (prod> 9) {
            accum += (prod - 9);
          } else {
            accum += (prod);
          }
        } else {
          accum += d;
        }
        return accum;
      }, 0);
    this.valid = sum != 0 && sum % 10 == 0;
  }
}