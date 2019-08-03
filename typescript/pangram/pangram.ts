class Pangram {
  private readonly _isPangram: boolean

  constructor(phrase: string) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const lower = phrase.toLowerCase()
    this._isPangram = true
    for (const char of alpha) {
      if (!lower.includes(char)) {
        this._isPangram = false
        break
      }
    }
  }

  isPangram(): boolean {
    return this._isPangram
  }
}

export default Pangram