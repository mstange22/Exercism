#include "sum_of_multiples.h"
#include <map>

using namespace std;

int sum_of_multiples::to(vector<int> factors, int max) {
  int sum = 0;
  map<int, int> added_multiples;

  for (size_t i = 0; i < factors.size(); i++) {
    int multiplier = 1;
    for(int multiple = factors[i]; multiple < max; multiple += factors[i]) {
      if (!added_multiples[multiple]) {
        sum += multiple;
        added_multiples[multiple] = 1;
      }
      multiplier++;
    }
  }
  return sum;
}