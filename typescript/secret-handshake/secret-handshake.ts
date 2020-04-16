const COMMANDS: [number, string][] = [
  [0b1, 'wink'],
  [0b10, 'double blink'],
  [0b100, 'close your eyes'],
  [0b1000, 'jump'],
  [0b10000, 'reverse']
]

class HandShake {
  private n: number

  constructor(n: number) {
    this.n = n
  }

  commands = () => {
    const res: string[] = []
    COMMANDS.forEach((commandTuple) => {
      const [bit, command] = commandTuple
      if ((this.n & bit) === bit) {
        if (bit === 0b10000) {
          res.reverse();
        } else {
          res.push(command)
        }
      }
    })
    return res
  }
}

export default HandShake