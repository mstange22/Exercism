const TEENS = {
  11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
};

const ONES = {
  1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
};

const TENS = {
  1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety',
};

const BIG_NUMS = {
  1e9: 'billion', 1e6: 'million', 1000: 'thousand', 100: 'hundred',
};

export class Say {
  inEnglish(n) {
    if (n < 0 || n >= 1e12) throw new Error('Number must be between 0 and 999,999,999,999.');
    if (n === 0) return 'zero';
    if (n >= 11 && n <= 19) return TEENS[n];
    if (n >= 1 && n <= 9) return ONES[n];

    let res = '';

    Object.keys(BIG_NUMS)
      .sort((a, b) => b - a)
      .forEach((key) => {
        if (n >= Number(key)) {
          res += `${this.inEnglish(Math.trunc(n / Number(key)))} ${BIG_NUMS[key]}${n % key === 0 ? '' : ' '}`;
          n %= key;
        }
      });
    
    if (n > 0 && n < 20) return res + this.inEnglish(n);

    const tens = Math.floor(n / 10);
    const ones = n % 10;
    return `${res}${tens >= 1 ? TENS[tens] : ''}${ones === 0 ? '' : `-${ONES[ones]}`}`;
  }
}
