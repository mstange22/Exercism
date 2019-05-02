export class ArgumentError extends Error {}

export class WordProblem {
  constructor(question) {
    this._answer = this.evaluate(question.slice(0, -1).replace(/ by/g, '').split(' ').slice(2));
  }

  evaluate([operand1, operator, operand2, ...remainingQuestion]) {
    operand1 = Number(operand1);
    operand2 = Number(operand2);
    let res;

    switch (operator) {
      case 'plus':
        res = operand1 + operand2;
        break;
      case 'minus':
        res = operand1 - operand2;
        break;
      case 'multiplied':
        res = operand1 * operand2;
        break;
      case 'divided':
        res = operand1 / operand2;
        break;
      default:
        return null;
    }
    if (remainingQuestion.length !== 0) {
      return this.evaluate([res, ...remainingQuestion]);
    }
    return res;
  }

  answer() {
    if (!this._answer) throw new ArgumentError();
    return this._answer;
  }
}
