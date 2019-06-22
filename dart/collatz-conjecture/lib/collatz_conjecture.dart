class CollatzConjecture {
  int steps(num n) {
    if (n <= 0) throw ArgumentError("Only positive numbers are allowed");
    int count = 0;
    while (n > 1) {
      n = n % 2 == 1 ? 3 * n + 1 : n / 2;
      count++;
    }
    return count;
  }
}
