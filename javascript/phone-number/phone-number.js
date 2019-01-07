class PhoneNumber {
  constructor(number) {
    this.strippedNumber = number.replace(/[^\d]/g, '');
    if (this.strippedNumber.length !== 10) {
      if (this.strippedNumber.length === 11 && this.strippedNumber[0] === '1') {
        this.strippedNumber = this.strippedNumber.slice(1);
      } else {
        this.strippedNumber = null;
        return;
      }
    }
    // check for 0 or 1 in 1st or 4th position
    if (/^[01]+|^[\d]{3}[01]+/.test(this.strippedNumber)) {
      this.strippedNumber = null;
    }
  }

  number() {
    return this.strippedNumber;
  }
}

export default PhoneNumber;