export class Forth {
  constructor() {
    this.stack = [];
    this.customs = {};
    this.math = {
      '+': ([a, b]) => [a + b],
      '-': ([a, b]) => [a - b],
      '*': ([a, b]) => [a * b],
      '/': ([a, b]) => {
        if (b === 0) throw new Error('Division by zero');
        return [Math.floor(a / b)];
      },
    };
    this.keywords = {
      dup: () => [...this.stack, this.stack[this.stack.length - 1]],
      drop: () => this.stack.slice(0, -1),
      swap: () => {
        this.validateStack(2);
        return [...this.stack.slice(0, -2), this.stack.pop(), this.stack.pop()];
      },
      over: () => {
        this.validateStack(2);
        return [...this.stack, this.stack[this.stack.length - 2]];
      },
    };
  }

  validateStack(n) {
    if (this.stack.length < n) throw new Error('Stack empty');
    return true;
  }

  evaluate(s) {
    let input = s.split(' ').map(token => token.toLowerCase());
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ':') {
        this.buildCustomCommand(input);
        break;
      } else if (this.customs[input[i]]) {
        input = [...input, ...this.customs[input[i]].commands];
      } else if (/[\d]+/.test(input[i])) {
        this.stack.push(Number(input[i]));
      } else if (this.math[input[i]] && this.validateStack(2)) {
        this.stack = this.math[input[i]](this.stack);
      } else if (this.keywords[input[i]] && this.validateStack(1)) {
        this.stack = this.keywords[input[i]]();
      } else {
        throw new Error('Unknown command');
      }
    }
  }

  buildCustomCommand(input) {
    if (/[\d]+/.test(input[1])) throw new Error('Invalid definition');
    const customKey = input[1];
    const commands = [];
    for (let i = 2; input[i] !== ';'; i++) {
      commands.push(input[i]);
    }
    this.customs[customKey] = { commands };
  }
}
