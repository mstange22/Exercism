class Triangle {
  bool equilateral(double a, double b, double c) => a != 0 && a == b && b == c;

  bool isosceles(double a, double b, double c) {
    return this.isValidTriangle(a, b, c) && (a == b || a == c || b == c);
  }

  bool scalene(double a, double b, double c) {
    return this.isValidTriangle(a, b, c) && a != b && a != c && b != c;
  }

  bool isValidTriangle(double a, double b, double c) {
    if (a == 0 || b == 0 || c == 0) {
      return false;
    }
    return !(a + b < c || a + c < b || b + c < a);
  }
}
