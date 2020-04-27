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

const addSpaces = (s: string): string => s.replace(/(.{5})(?=\S)/g, '$1 ')

export default class AtbashCipher {
  translateString = (s: string) => {
    return [...s].reduce((accum, c) => {
      if (isAlphaNum(c)) {
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
    return addSpaces(this.translateString(s))
  }

  decode = (s: string) => {
    return this.translateString(s)
  }
}
