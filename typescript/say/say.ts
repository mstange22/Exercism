const ones = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
]

const teens = [
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
]

const tens = [
  '', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'  
]

const largeGroups: [number, string][] = [
  [1000000000, 'billion'],
  [1000000, 'million'],
  [1000, 'thousand'],
  [100, 'hundred']
]

export default class Say {
  inEnglish(n: number): string {
    if (n < 0 || n > 999999999999) {
      throw new Error('Number must be between 0 and 999,999,999,999.')
    }

    let res = ''

    for (const [largeNumber, label] of largeGroups) {
      if (n >= largeNumber) {
        res += `${this.inEnglish(Math.floor(n / largeNumber))} ${label}`
        n %= largeNumber
        return n === 0 ? res : `${res} ${this.inEnglish(n)}`
      }
    }

    if (n >= 20) {
      res += tens[Math.floor(n / 10)]
      n %= 10
      return n === 0 ? res : `${res}-${ones[n]}`
    }

    if (n >= 10) {
      return teens[n - 10]
    }

    return ones[n]
  }
}