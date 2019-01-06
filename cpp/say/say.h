#ifndef SAY_H
#define SAY_H
#include <string>

using namespace std;

namespace say {
  string convert_ones(const unsigned long long);
  string convert_tens(const unsigned long long);
  string convert_teens(const unsigned long long);
  string convert_hundred(const unsigned long long);
  string convert_thousand(unsigned long long);
  string in_english(unsigned long long);
}

#endif