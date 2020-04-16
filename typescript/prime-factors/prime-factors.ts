const calculatePrimeFactors = (n: number): number[] => {
  const res: number[] = []
  let testFactor = 2
  while (n > 1) {
    if (n % testFactor === 0) {
        res.push(testFactor)
        n /= testFactor
    } else {
      testFactor++
    }
  }
  return res
}

export default calculatePrimeFactors
