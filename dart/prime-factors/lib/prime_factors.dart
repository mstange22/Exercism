class PrimeFactors {
  List<int> factors(int n) {
    List<int> primeFactors = [];

    for (int factor = 2; n >= factor; factor++) {
      while (n % factor == 0) {
        primeFactors.add(factor);
        n ~/= factor;
      }
    }
    return primeFactors;
  }
}
