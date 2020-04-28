const isAlphaNum = (c: string) => /[A-Za-z0-9]/.test(c)
const isNumber = (c: string) => /[0-9]/.test(c)
const letterPosition = (c: string) => c.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)
const translateLetter = (c: string) => String.fromCharCode('z'.charCodeAt(0) - letterPosition(c))
const addSpaces = (s: string, chunkSize: number = 5) => [...s].reduce((accum: string[], _, i) => i % chunkSize === 0 ? [...accum, s.substring(i, i + chunkSize)] : accum, []).join(' ')

export default class AtbashCipher {
  translateString = (s: string) => [...s].reduce((accum, c) => isAlphaNum(c) ? isNumber(c) ? accum + c : accum + translateLetter(c) : accum, '')
  encode = (s: string) => addSpaces(this.translateString(s))
  decode = (s: string) => this.translateString(s)
}
