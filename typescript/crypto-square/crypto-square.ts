export default class Crypto {
  constructor(private readonly s: string) {}

  normalizePlaintext = () =>
    [...this.s].reduce((accum, c) => {
      if (/[0-9A-Za-z]/.test(c)) {
        accum += c.toLowerCase()
      }
      return accum
    }, '')

  size = () => Math.ceil(Math.sqrt(this.normalizePlaintext().length))

  plaintextSegments = (): string[] => {
    const text = this.normalizePlaintext()
    const size = this.size()
    const segments: string[] = []
    for (let i = 0; i < text.length; i += size) {
      segments.push(text.substring(i, i + size))
    }
    return segments
  }

  ciphertext = (): string =>
    this.plaintextSegments().reduce((accum, _, i, segments) => {
      for (let j = 0; j < segments.length; j++) {
        accum += segments[j] && segments[j][i] ? segments[j][i] : ''
      }
      return accum
    }, '')
}
