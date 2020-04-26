export default class AtbashCipher {
  encode = (s: string, decode?: boolean) => {
    return [...s].reduce((accum, c) => {
      if (!/[, .]/.test(c)) {
        if (!decode && accum.length % 6 === 5) {
          accum += ' '
        }
        if (c >= '0' && c <= '9') {
          accum += c
        } else {
          const diff = c.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)
          accum += String.fromCharCode('z'.charCodeAt(0) - diff)
        }
      }
      return accum
    }, '')
  }

  decode = (s: string) => this.encode(s, true)
}
