export default class VLQ {
  static encode = (input: number[]): number[] =>
    input.reduce((accum: number[], n) => {
      const bits = n.toString(2)
      const bytes: string[] = [];
      let byte = ''

      for (let i = bits.length - 1; i >= 0; i--) {
        byte = bits[i] + byte
        if (byte.length === 7 || i === 0) {
          bytes.push(byte)
          byte = ''
        }
      }
      return [
        ...accum,
        ...bytes
          .map((s, i) => (i === 0 ? parseInt(s, 2) : parseInt(s, 2) | 128))
          .reverse()
      ]
    }, [])

  static decode = (bytes: number[]): number[] => {
    let n = ''
    return bytes.reduce((accum: number[], byte, i) => {
      if (byte & 128) {
        if (i === bytes.length - 1) {
          throw new Error('Incomplete sequence')
        }
        const binaryString = (byte - 128).toString(2)
        n += '0000000'.substring(binaryString.length) + binaryString
      } else if (n === '') {
        accum.push(byte)
      } else {
        const binaryString = byte.toString(2)
        const leastSignificantByte = '0000000'.substring(binaryString.length) + binaryString
        accum.push(parseInt(n + leastSignificantByte, 2))
        n = ''
      }
      return accum
    }, [])
  }
}
