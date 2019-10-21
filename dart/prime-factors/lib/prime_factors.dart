class PrimeFactors {
  List<int> factors(int n) {
    List<int> primeFactors = [];

    for (int i = 2; i <= n; i++) {
      while (n % i == 0) {
        primeFactors.add(i);
        n ~/= i;
      }
    }
    return primeFactors;
  }
}
