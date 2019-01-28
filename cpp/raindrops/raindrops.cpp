#include "raindrops.h"
#include <string>

std::string raindrops::convert(int n) {
  std::string res = "";
  if (n % 3 == 0) {
    res += "Pling";
  }
  if (n % 5 == 0) {
    res += "Plang";
  }
  if (n % 7 == 0) {
    res += "Plong";
  }
  return res.length() == 0 ? std::to_string(n) : res;
}