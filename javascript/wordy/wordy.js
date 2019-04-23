export class ArgumentError extends Error {}

export class WordProblem {
  constructor(question) {
    this._answer = this.evaluate(question.slice(0, -1).split(' ').slice(2));
  }

  evaluate(question) {
    let res;
    switch (question[1]) {
      case 'plus':
        res = Number(question[0]) + Number(question[2]);
        question = [res, ...question.slice(3)];
        break;
      case 'minus':
        res = question[0] - question[2];
        question = [res, ...question.slice(3)];
        break;
      case 'multiplied':
        res = question[0] * question[3];
        question = [res, ...question.slice(4)];
        break;
      case 'divided':
        res = question[0] / question[3];
        question = [res, ...question.slice(4)];
        break;
      default:
        return null;
    }
    if (question.length > 1) {
      return this.evaluate(question);
    }
    return res;
  }

  answer() {
    if (!this._answer) throw new ArgumentError();
    return this._answer;
  }
}
