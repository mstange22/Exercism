#include "binary.h"

#include <cmath>
#include <iostream>

int binary::convert(string s) {
  int num = 0;
  for (int i = s.size() - 1, e = 0; i >= 0; i--, e++) {
    if (s[i] == '1') {
      num += pow(2, e);
    } else if (s[i] != '0') {
      return 0;
    }
  }
  return num;
}