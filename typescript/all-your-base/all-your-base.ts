export default class Converter {
  convert = (n: number[], inBase: number, outBase: number): number[] => {
    // validate params
    if (inBase <= 1) {
      throw new Error('Wrong input base');
    } else if (outBase <= 1 || outBase % 1 > 0) {
      throw new Error('Wrong output base');
    }
    if (n.length === 0) {
      throw new Error('Input has wrong format');
    } else if (n.length > 1 && n[0] === 0 ) {
      throw new Error('Input has wrong format');
    }
    // convert from inBase to base 10
    let base10Num: number = getBase10Number(n, inBase);

    if (base10Num === 0) {
      return [0];
    }

    return getOutBaseNumber(base10Num, outBase);
  }
};

const getOutBaseNumber = (base10Num: number, outBase: number): number[] => {
  const n = [];
  while (base10Num > 0) {
    n.unshift(base10Num % outBase);
    base10Num = Math.floor(base10Num / outBase); 
  }
  return n;
}

const getBase10Number = (n: number[], base: number): number => {
  let res: number = 0;
  for (let i = 0; i < n.length; i++) {
    const digit: number = n[n.length - 1 - i];
    if (digit < 0 || digit >= base) {
      throw new Error('Input has wrong format');
    }
    res += digit * (base ** i);
  }

  return res
}
