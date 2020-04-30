const A_CODE = 'a'.charCodeAt(0)
const NUM_LETTERS = 26

enum Coding { Encoding, Decoding }

const generateKey = (): string => {
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

    getKeyShift = (i: number): number => {
        return this.key[i % this.key.length].charCodeAt(0)
    }

    translateChar = (c: string, i: number, coding: Coding): string => {
        let keyShift = this.getKeyShift(i) - A_CODE
        if (coding === Coding.Decoding) {
            keyShift = -keyShift
        }
        return String.fromCharCode(A_CODE + normalizeShift((c.charCodeAt(0) + keyShift)))
    }

    translate = (text: string, coding: Coding): string => {
        return [...text.toLowerCase()].reduce((accum, c, i) => {
            return accum + this.translateChar(c, i, coding)
        }, '')
    }

    encode = (plaintext: string) => this.translate(plaintext, Coding.Encoding)
    decode = (ciphertext: string) => this.translate(ciphertext, Coding.Decoding)
}

export default SimpleCipher
