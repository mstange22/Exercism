#include "raindrops.h"

rain MAP[3] = {
  { 3, "Pling" },
  { 5, "Plang" },
  { 7, "Plong" },
};

std::string raindrops::convert(int n) {
  std::string res = "";
  for (int i = 0; i < 3; i++) {
    if (n % MAP[i].mod == 0) {
      res += MAP[i].sound;
    }
  }
  return res.length() == 0 ? std::to_string(n) : res;
}