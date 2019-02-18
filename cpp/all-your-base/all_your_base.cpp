#include "all_your_base.h"
#include<cmath>
#include<deque>

vector<unsigned int> all_your_base::convert(const unsigned int old_base, const vector<unsigned int> in_digits, const unsigned int new_base) {
  if (in_digits.size() == 0 || in_digits[0] == 0 || new_base <= 1) return {};
  
  vector<unsigned int> out_digits;
  int temp = 0;
  int exponent = int(in_digits.size() - 1);

  for (size_t i = 0; i < in_digits.size(); i++) {
    if (in_digits[i] >= old_base) return {};
    if (in_digits[i] != 0) {
      temp += in_digits[i] * pow(old_base, exponent);
    }
    exponent--;
  }

  while (temp > 0) {
    out_digits.push_back(temp % new_base);
    temp /= new_base;
  }

  std::reverse(out_digits.begin(), out_digits.end());
  return out_digits;
}