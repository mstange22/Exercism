class ArgumentError extends Error {}

const OPERATIONS: {[ key: string]: (a: number, b: number) => number } = {
  plus: (a: number, b: number): number =>  a + b,
  minus: (a: number, b: number): number =>  a - b,
  multiplied: (a: number, b: number): number =>  a * b,
  divided: (a: number, b: number): number =>  a / b,
}

class WordProblem {
  constructor(private readonly phrase: string) {}

  private getTokens = (): string[] =>
    this.phrase
      .slice(0, -1)
      .split(' ')
      .slice(2)
      .filter(token => token !== 'by')

  private getResult(a: string | number, b: string, operation: string) {
    if (!OPERATIONS[operation]) {
      throw new ArgumentError()
    }
    return OPERATIONS[operation](Number(a), Number(b))
  }

  answer = (): number => {
    const tokens = this.getTokens()
    let res = this.getResult(tokens[0], tokens[2], tokens[1])
    for (let i = 3; i <= tokens.length - 2; i++) {
      res = this.getResult(res, tokens[i + 1], tokens[i])
    }
    return res
  }
}

export { WordProblem, ArgumentError }