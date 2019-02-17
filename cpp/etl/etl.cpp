#include "etl.h"
#include <iostream>

std::map<char, int> etl::transform(const std::map<int, std::vector<char>> old) {
  std::map<char, int> res;
  for (auto element : old) {
    for (auto c : element.second) {
      res[tolower(c)] = element.first;
    }
  }
  return res;
}