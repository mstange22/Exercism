import 'dart:math';

bool isPrime(int n) {
  for (int i = 2; i <= sqrt(n).round(); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

class NthPrime {
  int prime(int n) {
    if (n == 0) {
      throw ArgumentError("There is no zeroth prime");
    }
    List<int> primes = [2];
    int testVal = 3;
    while (primes.length < n) {
      if (isPrime(testVal)) {
        primes.add(testVal);
      }
      testVal++;
    }
    return primes[primes.length - 1];
  }
}
