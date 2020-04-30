const A_CODE = 'a'.charCodeAt(0)
const NUM_LETTERS = 26

enum Coding {
    Encoding,
    Decoding
}

const generateKey = () => {
    let res = ''
    for (let i = 0; i < 100; i++) {
        res += String.fromCharCode(Math.floor(Math.random() * NUM_LETTERS) + A_CODE)
    }
    return res
}

const normalizeShift = (shift: number) => ((((shift) - A_CODE) % NUM_LETTERS) + NUM_LETTERS) % NUM_LETTERS

class SimpleCipher {
    key: string

    constructor(key?: string) {
        this.key = key || generateKey()
    }

    getKeyShift = (i: number, coding: Coding): number => {
        const keyCode = this.key[i % this.key.length].charCodeAt(0)
        return coding === Coding.Decoding ? A_CODE - keyCode : keyCode - A_CODE
    }

    getNetShift = (c: string, i: number, coding: Coding) => normalizeShift(c.charCodeAt(0) + this.getKeyShift(i, coding))

    translateChar = (c: string, i: number, coding: Coding) => String.fromCharCode(A_CODE + this.getNetShift(c, i, coding))

    translate = (text: string, coding: Coding) =>
        [...text.toLowerCase()].reduce((accum, c, i) => accum + this.translateChar(c, i, coding), '')

    encode = (plaintext: string) => this.translate(plaintext, Coding.Encoding)

    decode = (ciphertext: string) => this.translate(ciphertext, Coding.Decoding)
}

export default SimpleCipher
