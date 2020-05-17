#include "rational_numbers.h"
#include <stdlib.h>
#include <math.h>

static int get_gcd(int a, int b) {
  for (int i = abs(a); i >= 1; i--) {
    if (a % i == 0 && b % i == 0) {
      return i;
    }
  }
  return 1;
}

rational_t reduce(rational_t r) {
  if (r.numerator == 0) {
    return (rational_t) { 0, 1 };
  }
  if (r.denominator < 0) {
    r.numerator *= -1;
    r.denominator *= -1;
  }
  int gcd = get_gcd(r.numerator, r.denominator);
  return (rational_t) {
    r.numerator / gcd,
    r.denominator / gcd
  };
}

rational_t add(rational_t r1, rational_t r2) {
  return reduce((rational_t) {
    r1.numerator * r2.denominator + r2.numerator * r1.denominator,
    r1.denominator * r2.denominator
  });
}

rational_t subtract(rational_t r1, rational_t r2) {
  return reduce((rational_t) {
    r1.numerator * r2.denominator - r2.numerator * r1.denominator,
    r1.denominator * r2.denominator
  });
}

rational_t multiply(rational_t r1, rational_t r2) {
  return reduce((rational_t) {
    r1.numerator * r2.numerator,
    r1.denominator * r2.denominator
  });
}

rational_t divide(rational_t r1, rational_t r2) {
  return reduce((rational_t) {
    r1.numerator * r2.denominator,
    r1.denominator * r2.numerator
  });
}

rational_t absolute(rational_t r) {
  return reduce((rational_t) {
    abs(r.numerator),
    abs(r.denominator)
  });
}

rational_t exp_rational(rational_t r, int n) {
  return reduce((rational_t) {
    pow(r.numerator, n),
    pow(r.denominator, n)
  });
}

float exp_real(int x, rational_t r) {
  return pow(pow(x, r.numerator), (1 / (float)r.denominator));
}
