#ifndef RAINDROPS_H
#define RAINDROPS_H
#include <string>

struct rain {
  int mod;
  std::string sound;
};

namespace raindrops {
  std::string convert(int);
}

#endif