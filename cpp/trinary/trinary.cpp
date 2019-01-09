#include "trinary.h"
#include <cmath>
#include <iostream>

using namespace std;

int trinary::to_decimal(string num) {
  int res = 0;
  int exponent = 0;
  for (int i = num.length() - 1; i >= 0; i--) {
    if (num[i] < '0' || num[i] > '9') return 0;
    res += (int(num[i]) - '0') * pow(3, exponent++);
  }
  return res;
}