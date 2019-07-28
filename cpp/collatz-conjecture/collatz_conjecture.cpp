#include "collatz_conjecture.h"
#include <stdexcept>

int collatz_conjecture::steps(int n) {
  if (n <= 0) throw std::domain_error("input must be greater than zero");
  int steps = 0;
  while (n > 1) {
    if (n % 2 == 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    steps++;
  }
  return steps;
}