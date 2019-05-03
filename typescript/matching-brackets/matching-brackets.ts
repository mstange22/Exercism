const BRACKETS: {[open: string]: string} = {
  '{': '}',
  '[': ']',
  '(': ')',
}

class MatchingBrackets {
  stringOfBrackets: string

  constructor(stringOfBrackets: string) {
     this.stringOfBrackets = stringOfBrackets
  }

  isPaired(): boolean {
    const stack: string[] = []
    for (const bracket of this.stringOfBrackets) {
      if (BRACKETS[bracket]) {
        stack.push(BRACKETS[bracket]);
      } else if (Object.values(BRACKETS).includes(bracket)) {
        if (stack.pop() !== bracket) {
          return false
        }
      }
    }
    return stack.length === 0;
  }
}

export default MatchingBrackets