class ArgumentError extends Error {}

type Operation = 'plus' | 'minus' | 'multiplied' | 'divided'

const OPERATIONS = {
  plus: (a: number, b: number): number =>  a + b,
  minus: (a: number, b: number): number =>  a - b,
  multiplied: (a: number, b: number): number =>  a * b,
  divided: (a: number, b: number): number =>  a / b,
}

const isOperation = (token: string): token is Operation =>
  token === 'plus' || token === 'minus' || token === 'multiplied' || token === 'divided'

class WordProblem {
  constructor(private readonly phrase: string) {}

  private getTokens = (): string[] =>
    this.phrase
      .slice(0, -1)
      .split(' ')
      .slice(2)
      .filter(token => token !== 'by')

  private getResult(a: string | number, operation: string, b: string) {
    if (!isOperation(operation)) {
      throw new ArgumentError()
    }
    return OPERATIONS[operation](Number(a), Number(b))
  }

  answer = (): number => {
    const [a, ...tokens] = this.getTokens()
    let res = (Number(a));
    while (tokens.length > 0) {
      const [operation, b] = tokens.splice(0, 2)
      res = this.getResult(res || a, operation, b)
    }
    return res
  }
}

export { WordProblem, ArgumentError }