class Luhn {
  static valid(s: string) {
    s = s.replace(/ /g, '');
    if (s.length < 2 || !/\d/.test(s)) {
      return false;
    }
    const sum: number = [...s]
      .map(Number)
      .reverse()
      .reduce((accum, d, i) => {
        if (i % 2 === 1) {
          return d === 9 ? accum + 9 : accum + (d * 2) % 9;
        } else {
          return accum + d;
        }
      }, 0);
    return sum % 10 === 0;
  }
}

export default Luhn;