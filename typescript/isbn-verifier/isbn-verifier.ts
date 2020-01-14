export default class ISBN {
  private _isValid: boolean

  constructor(input: string) {
    this._isValid = this.validate(input)
  }

  private validate(input: string): boolean {
    let sum = 0;
    input = input.replace(/-/g, '')
    if (input.length != 10) {
      return false
    }
    for (let i = 0; i < input.length; i++) {
      const value = input[i]
      if (/[^0-9X]/.test(value)) {
        return false
      }
      if (value === 'X') {
        if (i != 9) {
          return false
        }
        sum += 10
      } else {
        sum += (Number(value) * (10 - i))
      }
    }
    return sum % 11 === 0
  }

  isValid(): boolean {
      return this._isValid
  }
}