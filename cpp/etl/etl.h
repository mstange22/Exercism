#ifndef ETL_H
#define ETL_H

#include <vector>
#include <map>

namespace etl {
  std::map<char, int> transform(const std::map<int, std::vector<char>>);
}

#endif