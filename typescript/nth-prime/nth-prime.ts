const isPrime = (n: number) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

class Prime {
  nth(n: number) {
    if (n <= 0) {
      throw new Error('Prime is not possible');
    }
    const primes: number[] = [];
    let testValue: number = 2;
    while (primes.length < n) {
      if (isPrime(testValue++)) {
        primes.push(testValue - 1);
      }
    }
    return primes[n - 1];
  }
}

export default Prime