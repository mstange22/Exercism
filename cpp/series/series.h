#ifndef SERIES_H
#define SERIES_H

#include <string>
#include <vector>

namespace series {
  std::vector<int> digits(std::string);
  std::vector<std::vector<int>> slice(std::string, int);
}

#endif