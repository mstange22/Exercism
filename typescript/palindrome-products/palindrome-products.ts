const isPalindrome = (n: number): boolean => {
  const s = n.toString()
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }
  return true
}

const generate = ({ maxFactor = 9, minFactor = 1 }): { [key: string]: { value: number, factors: number[][] } } => {
  let largest: { value: number, factors: number[][] } = { value: 0, factors: [] }
  let smallest: { value: number, factors: number[][] } = { value: maxFactor * maxFactor, factors: [] }

  for (let i = minFactor; i <= maxFactor; i++) {
    for (let j = minFactor; j <= maxFactor; j++) {
      const product = i * j
      if (isPalindrome(product)) {
        if (product > largest.value) {
          largest.value = product
          largest.factors = [[i, j]]
        } else if (product === largest.value && largest.factors.every(f => f[0] != j)) {
          largest.factors.push([i, j])
        }
        if (product < smallest.value) {
          smallest.value = product
          smallest.factors.push([i, j])
        } else if (product === smallest.value && smallest.factors.every(f => f[0] !== j)) {
          smallest.factors.push([i, j])
        }
      }
    }
  }
  return { largest, smallest }
}

export default generate