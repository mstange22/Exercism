#include "nth_prime.h"
#include <cmath>
#include <stdexcept>

bool prime::isPrime(const int num) {
  for (int i = 2; i <= sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

int prime::nth(const int n) {
  if (n == 0) {
    throw std::domain_error("invalid input");
  }
  int counter = 2;
  for (int i = 1; i <= n; i++) {
    while (!isPrime(counter++));
  }
  return counter - 1;
}