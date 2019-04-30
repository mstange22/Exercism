export default class RotationalCipher {
  static rotate(s: string, rot: number) {
    let res: string = '';
    const A: number = 'A'.charCodeAt(0);
    const Z: number = 'Z'.charCodeAt(0);
    for (const c of s) {
      const upperCharCode: number = c.toUpperCase().charCodeAt(0);
      const letterOffset: number = upperCharCode - A;
      if (upperCharCode >= A && upperCharCode <= Z) {
        const shift: number = (letterOffset + rot) % 26 - letterOffset;
        res += String.fromCharCode(c.charCodeAt(0) + shift);
      } else {
        res += c;
      }
    }
    return res;
  }
}
