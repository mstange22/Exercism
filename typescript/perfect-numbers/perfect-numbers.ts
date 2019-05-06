class PerfectNumbers {
  static classify(n: number) {
    if (n <= 0) {
      throw new Error('Classification is only possible for natural numbers.')
    }
    let sum = 0
    for (let i = 1; i < n; i++) {
      if (n % i === 0 && n !== i) {
        sum += i
      }
    }
    if (sum === n) {
      return 'perfect'
    }
    if (sum > n) {
      return 'abundant'
    }
    return 'deficient'
  }
}

export default PerfectNumbers