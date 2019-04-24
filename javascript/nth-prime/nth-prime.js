const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export class Prime {
  nth(n) {
    if (n <= 0) throw new Error('Prime is not possible')
    const primes = [];
    let i = 2;
    while (primes.length < n) {
      if (isPrime(i)) {
        primes.push(i);
      }
      i++;
    }
    return primes[n - 1];
  }
}