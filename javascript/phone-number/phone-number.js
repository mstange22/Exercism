export default class PhoneNumber {
  constructor(number) {
    this.phoneNumber = this.processNumber(number);
  }

  processNumber(number) {
    let strippedNumber = number.replace(/[^\d]/g, '');
    if (strippedNumber.length !== 10) {
      if (strippedNumber.length === 11 && strippedNumber[0] === '1') {
        strippedNumber = strippedNumber.slice(1);
      } else {
        return null;
      }
    }
    // check for 0 or 1 in 1st or 4th position
    if (/^[01]+|^[\d]{3}[01]+/.test(strippedNumber)) {
      return null;
    }
    return strippedNumber;
  }

  number() {
    return this.phoneNumber;
  }
}