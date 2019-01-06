#include "all_your_base.h"
#include<cmath>
#include<deque>

  vector<unsigned int> all_your_base::convert(const unsigned int old_base, const vector<unsigned int> in_digits, const unsigned int new_base) {
    vector<unsigned int> out_digits;
    deque<unsigned int> temp_deque;

    int temp = 0;
    int exponent = int(in_digits.size() - 1);

    for (size_t i = 0; i < in_digits.size(); i++) {
      if (in_digits[i] != 0) {
        temp += in_digits[i] * pow(old_base, exponent);
      }
      exponent--;
    }

    while (temp > 0) {
      temp_deque.push_front(temp % new_base);
      temp /= new_base;
    }

    for (size_t i = 0; i < temp_deque.size(); i++) {
      out_digits.push_back(temp_deque[i]);
    }

    return out_digits;
  }