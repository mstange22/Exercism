export default class Sieve {
  static primes(limit: number) {
    const marked: Set<number> = new Set()
    const primes: number[] = []
    for (let i = 2; i <= limit; i++) {
      if (!marked.has(i)) {
        primes.push(i)
        for (let j = i * 2; j <= limit; j += i) {
          marked.add(j)
        }
      }
    }
    return primes
  }
}