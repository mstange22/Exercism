#ifndef ARMSTRONG_NUMBERS_H
#define ARMSTRONG_NUMBERS_H
#include <string>
#include <cmath>

namespace armstrong_numbers {
  bool is_armstrong_number(const int n) {
    std::string digits = std::to_string(n);
    int sum = 0;
    for (char digit : digits) {
      sum += pow((int)digit - '0', digits.length());
    }
    return sum == n;
  }
}

#endif