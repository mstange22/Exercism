#include "luhn.h"
#include <boost/algorithm/string.hpp>

bool luhn::valid(std::string str) {
  boost::erase_all(str, " ");
  if (str.length() <= 1) {
    return false;
  }
  int sum = 0;
  for (size_t i = 0; i < str.length(); i++) {
    int digit = str[str.length() - 1 - i];
    if (digit < '0' || digit > '9') {
      return false;
    }
    digit -= '0';
    if (i % 2 == 1) {
      sum += digit == 9 ? 9 : (digit * 2) % 9;
    } else {
      sum += digit;
    }
  }
  return sum % 10 == 0;
}