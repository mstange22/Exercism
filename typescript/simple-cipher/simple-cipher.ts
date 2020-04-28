enum Coding {
    Encoding,
    Decoding
}

const generateKey = () => {
    let res = ''
    for (let i = 0; i < 100; i++) {
        res += String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0))
    }
    return res
}

class SimpleCipher {
    key: string

    constructor(key?: string) {
        this.key = key || generateKey()
    }

    translate = (text: string, coding: Coding) =>
        [...text.toLowerCase()].reduce((accum, c, i) => {
            const aCode = 'a'.charCodeAt(0)
            const keyCode = this.key[i % this.key.length].charCodeAt(0)
            const charCode = c.charCodeAt(0)
            let diff = keyCode - aCode
            if (coding === Coding.Decoding) {
                diff = -diff
            }
            return accum + String.fromCharCode((((((charCode + diff) - aCode) % 26) + 26) % 26) + aCode)
        }, '')

    encode = (plaintext: string) => this.translate(plaintext, Coding.Encoding)
    decode = (ciphertext: string) => this.translate(ciphertext, Coding.Decoding)
}

export default SimpleCipher
