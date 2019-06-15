#ifndef ARMSTRONG_NUMBERS_H
#define ARMSTRONG_NUMBERS_H
#include <vector>
#include <cmath>

namespace armstrong_numbers {
  bool is_armstrong_number(const int n) {
    std::vector<int> digits;
    int temp = n;
    int length = 0;
    while (temp > 0) {
      digits.push_back(temp % 10);
      temp /= 10;
      length++;
    }
    int sum = 0;
    for (int digit : digits) {
      sum += pow(digit, length);
    }
    return sum == n;
  }
}

#endif
