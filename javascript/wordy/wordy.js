export class ArgumentError extends Error {}

export class WordProblem {
  constructor(question) {
    this._answer = evaluate(question.slice(0, -1).replace(/ by/g, '').split(' ').slice(2));
  }

  answer() {
    if (!this._answer) throw new ArgumentError();
    return this._answer;
  }
}

const evaluate = ([operand1, operator, operand2, ...remainingQuestion]) => {
  let res = performOperation(Number(operand1), operator, Number(operand2));

  if (remainingQuestion.length !== 0) {
    return evaluate([res, ...remainingQuestion]);
  }
  return res;
};

const performOperation = (op1, operator, op2) => {
  if (operator === 'plus') return op1 + op2;
  if (operator === 'minus') return op1 - op2;
  if (operator === 'multiplied') return op1 * op2;
  if (operator === 'divided') return op1 / op2;
  return null;
};
