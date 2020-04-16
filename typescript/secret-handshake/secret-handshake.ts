const COMMANDS: [number, (arr: string[]) => void][] = [
  [0b1, (arr) => arr.push('wink')],
  [0b10, (arr) => arr.push('double blink')],
  [0b100, (arr) => arr.push('close your eyes')],
  [0b1000, (arr) => arr.push('jump')],
  [0b10000, (arr) => arr.reverse()]
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
        command(res)
      }
    })
    return res
  }
}

export default HandShake