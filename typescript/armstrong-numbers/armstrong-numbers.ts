export default class ArmstrongNumbers {
  static isArmstrongNumber(n: number) {
    const digits: number[] = String(n).split('').map(Number);
    return digits.reduce((acc, d) => acc += d ** digits.length, 0) === n;
  }
}