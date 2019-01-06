#include "hexadecimal.h"
#include <map>
#include <cmath>

int hexadecimal::convert(string s) {
  map<char, int> hexMap = {
    {'a', 10}, {'b', 11}, {'c', 12}, {'d', 13}, {'e', 14}, {'f', 15}
  }; 
  int num = 0;
  for (int i = s.size() - 1, e = 0; i >= 0; i--, e++) {
    if (s[i] < '0' || s[i] > '9') {
      if (!hexMap[tolower(s[i])]) {
        return 0;
      }
      num += hexMap[tolower(s[i])] * pow(16, e);
    } else {
      num += int(s[i] - '0') * pow(16, e);
    }
  }
  return num;
}