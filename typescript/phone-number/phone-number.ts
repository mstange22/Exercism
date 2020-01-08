export default class PhoneNumber {
  private _number: string | undefined;

  constructor(input: string) {
    this._number = this.validateInput(input);
  }

  number = (): string | undefined => this._number;

  validateInput = (input: string): string | undefined => {
    input = input.replace(/[()-. ]/g, '');
    if (input.length < 10 || input.length > 11) {
      return undefined;
    }
    if (input.length == 11) {
      if (input.startsWith('1')) {
        input = input.slice(1);
      } else {
        return undefined;
      }
    }
    return /[^0-9]/.test(input) ? undefined : input;
  }
}