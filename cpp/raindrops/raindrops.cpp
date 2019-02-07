#include "raindrops.h"
#include <map>

std::map<int, std::string> rain {{3, "Pling"}, {5, "Plang"}, {7, "Plong"}};

std::string raindrops::convert(int n) {
  std::string res;
  std::map<int, std::string>::iterator it;

  for (it = rain.begin(); it != rain.end(); it++) {
    int key = it->first;
    if (n % key == 0) {
      res += rain[key];
    }
  }
  return res.length() == 0 ? std::to_string(n) : res;
}