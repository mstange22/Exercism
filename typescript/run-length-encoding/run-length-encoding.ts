export default class RunLengthEncoding {
  static encode(s: string) {
    let res: string = '';
    let count: number = 1;
    for (let i = 0; i < s.length; i++) {
      if (s[i + 1] === s[i]) {
        count++;
      } else {
        res += `${count > 1 ? count : ''}${s[i]}`;
        count = 1;
      }
    }
    return res;
  }

  static decode(s: string) {
    let res: string = '';
    let multiplier: string = '';
    for (let i = 0; i < s.length; i++) {
      // while char is digit, add to multiplier
      if (/\d/.test(s[i])) {
        multiplier += s[i];
      } else {
        // if no multiplier, add one char
        if (multiplier === '') {
          res += s[i];
        } else {
          // otherwise add multiplier * chars
          for (let j = 0; j < Number(multiplier); j++) {
            res += s[i];
          }
          multiplier = '';
        }
      }
    }
    return res;
  }
}