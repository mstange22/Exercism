const isAlphaNum = (c: string) => {
  return /[A-Za-z0-9]/.test(c)
}

const isNumber = (c: string) => {
  return /[0-9]/.test(c)
}

const letterPosition = (c: string) => {
  return c.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)
}

const translateLetter = (c: string) => {
  return String.fromCharCode('z'.charCodeAt(0) - letterPosition(c))
}

export default class AtbashCipher {
  translateString = (s: string, isDecoding: boolean) => {
    return [...s].reduce((accum, c) => {
      if (isAlphaNum(c)) {
        const currChunkLength = accum.length % 6
        if (!isDecoding && currChunkLength === 5) {
          accum += ' '
        }
        if (isNumber(c)) {
          accum += c
        } else {
          accum += translateLetter(c)
        }
      }
      return accum
    }, '')
  }

  encode = (s: string) => {
    const isDecoding = false
    return this.translateString(s, isDecoding)
  }

  decode = (s: string) => {
    const isDecoding = true
    return this.translateString(s, isDecoding)
  }
}
