#include "prime_factors.h"

using namespace std;

vector<int>prime_factors::of(int num) {
  vector<int> res = {};
  int factor = 2;
  while (num != 1) {
    if (num % factor == 0) {
      num /= factor;
      res.push_back(factor);
    } else {
      factor++;
    }
  }

  return res;
}